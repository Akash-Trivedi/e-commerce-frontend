/**
 * author: akash trivedi
 * date-created: 10-march-2022
 * functionality: render the dashboard for the pubsliher
 * caller-function: 
 */
import React from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  Button, Avatar, Grid, Box
} from '@mui/material';
import { useContext } from 'react';
import ApplicationContext from '../../main/context/ApplicationContext';


export default function Dashboard() {
  const navigate = useNavigate()
  const stateObject = useContext(ApplicationContext)
  if (localStorage.getItem('userLoggedIn').localeCompare('0') === 0 || localStorage.getItem('userType').localeCompare('0') === 0) {
    navigate('/homepage')
  }
  let totalSales = 0;
  let sideNavContent = {
    name: [
      ['profile', 'profile'],
      ['your shops', 'shops'],
      ['your products', 'products'],
      ['product feedback', 'feedback'],
      ['add new product', 'new-product'],
      ['add new shop', 'new-shop'],
      ['update inventory', 'update-product'],
      ['statistics', 'sales-report'],
      ['order history', 'orders'],
      ['update profile', 'update-profile'],
    ]
  }

  let [publisherData, updateDashboard] = React.useState({
    shops: [],
    publisherInfo: {},
    products: [],
    totalSales: 0
  });

  React.useEffect(() => {
    fetch(`http://localhost:8000/api/publisher/all-info/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => { updateDashboard(response.data) })
      .catch(err => { console.log('some error occured: ' + err) })
  }, [])

  function logout(event) {
    event.preventDefault()
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    localStorage.setItem('userLoggedIn', 0)
    localStorage.setItem('userType', 0)
    stateObject.updateAppData(
      prev => {
        return {
          ...prev,
          userLoggedIn: false
        }
      }
    )
    navigate('/homepage')
  }

  return (
    <Box sx={{ minWidth: 400 }}>
      <Grid container spacing={2} sx={{ pt: 1, pl: 2 }}>

        {/* left side */}
        <Grid item xs={2} fullWidth>
          <div className="h-full hidden rounded-2xl lg:block my-3 ml-4 shadow-lg relative w-full">
            <div className="bg-white h-full rounded-2xl dark:bg-gray-700 border-r-4 border-blue-500">
              <div className="relative flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>A</Avatar>
              </div>
              {
                sideNavContent.name.map((value) => {
                  return (
                    <span className="w-full font-thin capitalize text-blue-500 flex items-center p-3 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 border-r-4">
                      <Link className="mx-4 text-sm font-normal" to={value[1]} state={publisherData}>{value[0]}</Link>
                    </span>
                  )
                })
              }
            </div>
          </div>
        </Grid>

        {/* right partition to navigation */}
        <Grid item xs={10} fullWidth>
          <Grid container spacing={2} sx={{ p: 2 }}>
            {/* header */}
            <Grid item xs={12}>
              <Grid container spacing={2} sx={{ p: 2 }}>
                <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl">
                  <div className="flex items-center justify-end ml-5 mr-4 sm:mr-0 sm:right-auto">
                    <Grid item xs={5}>
                      <span>Overall Sales: <span className='text-lime-500 font-semibold'> &#8377; {publisherData.totalSales}</span>&nbsp;|&nbsp;</span>
                    </Grid>
                    <Grid item xs={5}>
                      <span>Shops Registered: <span className='text-lime-500 font-semibold'>{publisherData.shops.length}</span></span>
                    </Grid>
                    <Grid item xs={2}>
                      <form onSubmit={logout}>
                        <Button color='primary' variant='contained' disableElevation type='submit'>logout</Button>
                      </form>
                    </Grid>
                  </div>
                </header>
              </Grid>
            </Grid>
            <Outlet />
          </Grid>
        </Grid >
      </Grid >
    </Box>
  )
}

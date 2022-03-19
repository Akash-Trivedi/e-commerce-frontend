/**
 * author: akash trivedi
 * date-created: 10-march-2022
 * functionality: render the dashboard for the pubsliher
 * caller-function: 
 */
import React from 'react';
import UpdateProfile from './UpdateProfile';
import Shops from './Shops'
export default function Dashboard(props) {
  /**
   * main dashboard for the publisher
   */
  let sideNavContent = {
    name: ['dashboard', 'shops', 'sales report', 'update profile',]
  }
  let [publisherData, updateDashboard] = React.useState({
    shops: [],
    publisherInfo: {}
  });

  React.useEffect(() => {
    fetch(`http://localhost:8000/api/publisher/all-info/`, {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {updateDashboard(response)})
      .catch(err => { console.log('some error occured: ' + err) })
  }, [])

  function updateActiveLayout(event) {
    console.log(event.target.name);
    updateDashboard(event.target.name);
  }
  return (
    <div>
      <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
          <div className="h-screen hidden lg:block my-3 ml-4 shadow-lg relative w-60">
            <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
              <div className="flex items-center justify-center pt-6">

              </div>

              <nav className="">
                {/* side navigation */}
                <div>
                  {
                    sideNavContent.name.map((value) => {
                      return (
                        <span className="w-full font-thin capitalize text-blue-500 flex items-center p-3 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500">
                          <a className="mx-4 text-sm font-normal" name={value} onClick={updateActiveLayout}>
                            {value}
                          </a>
                        </span>
                      )
                    })
                  }
                </div>
              </nav>

            </div>
          </div>
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
              <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                  <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                    <span>Overall Sales: <span className='text-lime-500 font-bold'> &#8377; {publisherData.overAllSales}</span>&nbsp;|&nbsp;</span>
                    <span>Shops Registered: <span className='text-lime-500 font-bold'>{publisherData.shops.length}</span></span>
                  </div>
                  <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                    <a className="block relative">
                      <img alt="profile" className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </a>
                  </div>
                </div>
              </div>
            </header>
            <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
              <div className="flex flex-col flex-wrap sm:flex-row ">
                <div>
                  {
                    <Shops data={publisherData.shops} />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div >
  )
}

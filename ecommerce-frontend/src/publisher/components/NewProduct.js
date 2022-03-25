/**
 * author: akash trivedi
 * date-created: 17-march-2022
 * functionality: renders new product form
 * caller-function: ecommerce-frontend\src\index.js
 */
import React from 'react'
import { useLocation } from 'react-router-dom';
import {
  Grid, TextField, Avatar, MenuItem, FormHelperText, Select,
  FormControl, InputLabel, Box, Button
} from '@mui/material'
import ApplicationContext from '../../main/context/ApplicationContext';
import { useContext } from 'react';

export default function NewProduct() {
  const stateObject = useContext(ApplicationContext)
  let stocks = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  let discounts = [0, 5, 10, 12, 15, 17, 20, 22, 25, 33]
  let colors = [
    'white', 'grey', 'black', 'red', 'green', 'blue', 'yellow'
  ]
  const [product, updateProduct] = React.useState({
    name: '',
    companyName: '',
    description: '',
    stock: '0',
    price: '0',
    size: '-',
    color: '',
    discount: '0',
    edition: '-',
    shopId_id: '',
    tagId_id:''
  }
  )
  function registerProduct(event) {
    event.preventDefault();
    async function updateProduct(data) {
      console.log(data);
      let response = await fetch(`http://localhost:8000/api/publisher/product/add/`,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
      response = await response.json();
      return response;
    }
    let response = updateProduct(product)
    response.then(
      res => {
        if (res.status === 201) {
          alert('new product added!')
          stateObject.updateAppData(
            prev => {
              return {
                ...prev,
                products: res.products
              }
            }
          )
        } else if(res.status === 409) {
          alert('product already added')
        } else{
          alert('server encountered error')
        }
      }
    )
    response.catch((error) => console.error('error is: ' + error));
  }

  function handleChange(event) {
    if (event.target.name === 'shopId') {
      updateProduct((prevData) => {
        return {
          ...prevData,
          shopId: event.target.value
        }
      })
    }
    updateProduct((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <Box sx={{ p: 4, justifyContent: 'center', display: 'flex' }}>
      <form onSubmit={registerProduct}>
        <Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>

          {/* single row */}
          <Grid item xs={12}>
            <FormControl fullWidth required margin='normal' >
              <InputLabel>shop</InputLabel>
              <Select name='shopId_id' label='shop' onChange={handleChange} required variant='outlined'>
                {
                  stateObject.appData.shops.map(shop => {
                    return <MenuItem value={shop.shopId} onChange={handleChange}>{shop.name}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Grid>

          {/* row 2 */}
          <Grid item xs={3}>
            <TextField fullWidth margin='normal' onChange={handleChange} type='text' name='companyName' label='Company Name' value={product.companyName} required />
          </Grid>

          <Grid item xs={3}>
            <TextField fullWidth margin='normal' onChange={handleChange} type='text' name='name' label='Product Name' value={product.name} required />
          </Grid>

          <Grid item xs={6}>
            <TextField fullWidth margin='normal' label='description' onChange={handleChange} type='text' name='description' value={product.description} required />
          </Grid>



          {/* third row */}
          <Grid item xs={2}>
            <TextField fullWidth margin='normal' type='text' min='50' label='Price' onChange={handleChange} name='price' required />
          </Grid>

          <Grid item xs={2}>
            <FormControl fullWidth required margin='normal'>
              <InputLabel>stock</InputLabel>
              <Select name='stock' label='stock' onChange={handleChange} required>
                {
                  stocks.map(value => {
                    return <MenuItem value={value}>{value}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <FormControl fullWidth required margin='normal' >
              <InputLabel>color</InputLabel>
              <Select name='color' label='color' onChange={handleChange} required>
                {
                  colors.map(value => {
                    return <MenuItem value={value}>{value}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <FormControl fullWidth margin='normal' >
              <InputLabel>tags</InputLabel>
              <Select name='tagId_id' label='tag' onChange={handleChange}>
                {
                  colors.map(value => {
                    return <MenuItem value={value}>{value}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <FormControl fullWidth required margin='normal' >
              <InputLabel>discount</InputLabel>
              <Select name='discount' label='discount' onChange={handleChange} required>
                {
                  discounts.map(value => {
                    return <MenuItem value={value}>{value}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <TextField fullWidth margin='normal' type='text' min='50' className='form-control' label='Edition' onChange={handleChange} name='edition' />
          </Grid>

          <Grid item xs={2}>
            <TextField fullWidth margin='normal' type='text' min='50' className='form-control' label='Size' onChange={handleChange} name='size' />
          </Grid>

        </Grid>
        <div>
          <Box sx={{ justifyContent: 'center', display: 'flex' }}>
            <Button variant='contained' color='primary' margin='normal' type='submit'>add</Button>
          </Box>
        </div>
      </form>
    </Box>
  )
}

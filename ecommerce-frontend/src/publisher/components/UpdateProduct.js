/**
 * author: akash trivedi
 * date-created: 17-march-2022
 * functionality: renders new product form
 * caller-function: ecommerce-frontend\src\index.js
 */
import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import {
  Grid, TextField, Avatar, MenuItem, FormHelperText, Select,
  FormControl, InputLabel, Box, Button
} from '@mui/material'
import ApplicationContext from '../../main/context/ApplicationContext';

export default function NewProduct() {
  const stateObject = useContext(ApplicationContext)
  let stocks = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  let discounts = [0, 5, 10, 12, 15, 17, 20, 22, 25, 33]
  let colors = [
    'white', 'grey', 'black', 'red', 'green', 'blue', 'yellow'
  ]
  let [product, updateProduct] = React.useState({
    name: '',
    products: [],
    companyName: '',
    description: '',
    stock: '0',
    price: '0',
    size: '-',
    color: '',
    discount: '0',
    edition: '-',
    shopId_id: '',
    tagId_id: ''
  })
  function registerProduct(event) {
    event.preventDefault();

    async function updateProduct(data) {
      let response = await fetch(`http://localhost:8000/api/publisher/product/update/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      response = await response.json();
      return response;
    }
    let response = updateProduct(product)
      .then((response) => console.log(response))
      .catch((error) => console.error("error is: " + error));
  }

  function handleChange(event) {
    if (event.target.name === 'shopId') {
      updateProduct((prevData) => {
        return {
          ...prevData,
          shopId: event.target.value,
          products: getProductList(stateObject.appData.publisherProducts, event.target.value)
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
              <Select name='shopId' label='shop' onChange={handleChange} required variant='outlined'>
                {
                  stateObject.appData.shops.map(shop => {
                    return <MenuItem value={shop.shopId} onChange={handleChange}>{shop.name}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Grid>

          {/* row 2 */}
          <Grid item xs={12}>
            <FormControl fullWidth required margin='normal' >
              <InputLabel>shop</InputLabel>
              <Select name='productId' label='product' onChange={handleChange} required variant='outlined'>
                {
                  product.products.map(product => {
                    return <MenuItem value={product.productId} onChange={handleChange}>{`${product.companyName}: ${product.name}`}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Grid>

          {/* third row */}
          <Grid item xs={2}>
            <TextField fullWidth margin='normal' type='text' min='50' label='Price' onChange={handleChange} name='price' required value={product.price} />
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
                  stateObject.appData.tags.map(tag => {
                    return <MenuItem value={tag.tagId}>{tag.tagName}</MenuItem>
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
            <TextField fullWidth margin='normal' type='text' min='50' className='form-control' label='Edition' onChange={handleChange} name='edition' value={product.edition} />
          </Grid>

          <Grid item xs={2}>
            <TextField fullWidth margin='normal' type='text' min='50' className='form-control' label='Size' onChange={handleChange} name='size' value={product.size} />
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


function getProductList(list, id) {
  console.log(list)
  console.log(id)
  let filteredList = [];
  for (let index = 0; index < list.length; index++) {
    if (list[index].shopId === id) {
      filteredList.push(list[index])
    }
  }
  return filteredList;
}
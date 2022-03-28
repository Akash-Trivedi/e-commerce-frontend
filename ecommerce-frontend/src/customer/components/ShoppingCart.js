/**
 * author: akash trivedi
 * date-created: 10-march-2022
 * functionality: display the shopping cart with content
 * caller-function: ecommerce-frontend\src\index.js
 */
import React, { useContext } from 'react'
import ApplicationContext from '../../main/context/ApplicationContext';
import {
  Grid, Box
} from '@mui/material'

function Items(props) {
  const item = props.item;
  return (
    <li>{item.id}, </li>
  )
}

export default function ShoppingCart() {
  const stateObject = useContext(ApplicationContext)
  console.log(stateObject.appData.cart)
  return (
    <box>
      <Grid container sx={{ p: 2, bgcolor: 'white', color: 'white' }} columnGap='2'>
        <Grid item xs={9}>
          items
        </Grid>

        <Grid item xs={3} sx={{bgcolor: 'gray', color: 'black' }}>
          summary
        </Grid>
      </Grid>
    </box>
  )
}

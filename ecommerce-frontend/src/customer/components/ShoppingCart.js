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
      <Grid container sx={{ ml: 4, bgcolor: 'white', color: 'white' }} columnGap='2'>
        <Grid item xs={8}>
          <Grid container sx={{ p: 2, bgcolor: 'black', color: 'white' }}>
            {
              stateObject.appData.cart.products.length === 0 ? 'no items yet' : stateObject.appData.cart.products.map(
                product => {
                  return (
                    <Grid item xs={12}>
                      <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                      <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-medium text-lg">Holden Caulfield</h2>
                        <h3 class=" mb-3">UI Developer</h3>
                        <p class="mb-2">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                      </div>
                    </Grid>
                  )
                }
              )
            }
          </Grid>
        </Grid>

        <Grid item xs={3} sx={{ p: 2, bgcolor: 'black', color: 'white' }}>
          <h2 class="text-lg font-medium title-font mb-5">order summary</h2>
          <div class="relative mb-4">
          </div>
          <div class="relative mb-4">
          </div>
          <button class="bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">checkout</button>
          <p class="text-xs mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </Grid>
      </Grid>
    </box>
  )
}

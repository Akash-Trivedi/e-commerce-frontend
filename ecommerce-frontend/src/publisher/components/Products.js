/**
 * author: akash trivedi
 * date-created: 15-march-2022
 * functionality: render the shops in the dashboard outlet
 * caller-function: ecommerce-frontend\src\publisher\components\Dashboard.js
 */
import React, { useContext } from 'react'
import {
  Box, Grid, Rating, Button, Accordion, AccordionSummary, AccordionDetails, Typography
} from '@mui/material'
import UserContext from '../../main/context/UserContext'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

export default function Products(props) {
  console.log('publisher products are now rendered');
  const stateObject = useContext(UserContext)
  return (
    <Grid container sx={{ p: 2 }}>
      {
        stateObject.userData.products.map(
          (product) => {
            return <SingleProduct product={product} key={product.productId} />
          }
        )
      }
    </Grid>
  );
}

function SingleProduct(props) {
  const navigate = useNavigate()
  const product = props.product
  return (
    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Accordion className='capitalize'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id={product.productId} sx={{ bgcolor: '#7F8C8D', color: 'white' }}>
          <Typography sx={{px: 0}}>
            {`${product.companyName}: ${product.name}`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: '#E0E0E0', color: 'black' }} >
          <Typography sx={{p: 1}}>
            {`Description: ${product.description}`}
          </Typography>
          <Typography sx={{p: 1}}>
            {`price: ${product.price} off: ${product.discount}%`}
          </Typography>
          <Typography sx={{p: 1}}>
            {`total reviews: ${product.totalFeedbacks}`}
            <Rating name="simple-controlled" readOnly value={parseInt(product.feedBackValue)} size='small' />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

// color: "white"
// edition: "basic"
// feedBackValue: 0
// name: "1.5 tonne AC"
// productId: 5
// shopId: 7
// size: "-"
// stock: 5
// tagId: 1
// totalFeedbacks: 0
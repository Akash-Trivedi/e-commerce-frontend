/**
 * author: akash trivedi
 * date-created: 15-march-2022
 * functionality: render the shops in the dashboard outlet
 * caller-function: ecommerce-frontend\src\publisher\components\Dashboard.js
 */
import React, { useContext } from 'react'
import {
  Box, Grid, Rating, Button
} from '@mui/material'
import ApplicationContext from '../../main/context/ApplicationContext'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

export default function Products(props) {
  console.log('publisher products are now rendered');
  const stateObject = useContext(ApplicationContext)
  return (
    <Grid container sx={{ p: 2 }}>
      {
        stateObject.appData.publisherProducts.map(
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
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id={product.productId}>
          <Typography>
            {`${product.companyName}: ${product.name}`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`Description: ${product.description}`}
          </Typography>
          <Typography>
            {`price: ${product.price} off: ${product.discount}%`}
          </Typography>
          <Typography>
            {`total reviews: ${product.totalFeedbacks}`}
            <Rating name="simple-controlled" readOnly value={parseInt(product.feedBackValue)} size='small' />
          </Typography>
          <Typography>
            <Button label='update'  variant='contained' onClick={() => { navigate('/publisher-dashboard/update-product/', { product }) }}>update</Button>
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
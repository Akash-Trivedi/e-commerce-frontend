/**
 * author: akash trivedi
 * date-created: 19-march-2022
 * functionality: render the feedbacks of the users related to publishers products
 * caller-function: ecommerce-frontend\src\publisher\components\Dashboard.js
 */
import React, { useContext } from 'react'
import {
  Rating, Box, Grid, Accordion, AccordionSummary, AccordionDetails, Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ApplicationContext from '../../main/context/ApplicationContext'

export default function Feedbacks() {
  const stateObject = useContext(ApplicationContext)
  const feedbacks = stateObject.appData.feedbacks
  return (
    <Box sx={{ p: 4, justifyContent: 'center', display: 'flex' }}>
      <Grid container gap={2}>
        {
          feedbacks.length === 0 ? true :
            (feedbacks.map((f) => {
              return <FeedbackBlock data={f} list={stateObject.appData.publisherProducts} key={f.feedbackId} />
            }))
        }
      </Grid>
    </Box>
  )
}

function FeedbackBlock(props) {
  let feedback = props.data
  let list = props.list
  return (
    <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Accordion className='capitalize'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id={feedback.feedbackId} sx={{ bgcolor: '#546E7A', color: 'white' }}>
          <Typography>
            {`${feedback.heading}`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: '#E0E0E0', color: 'black' }} >
          <Typography>
            {`product: ${getProduct(feedback.productId, list).name}`}
          </Typography>
          <Typography>
            {`review: ${feedback.review}`}
          </Typography>
          <Typography>
            <Rating name="read-only" value={feedback.starValue} readOnly />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

function getProduct(id, list) {
  let product = null;
  for (let index = 0; index < list.length; index++) {
    if (list[index].productId === id) {
      product = list[index]
      break
    }
  }
  return product;
}
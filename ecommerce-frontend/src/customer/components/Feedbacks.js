/**
 * author: akash trivedi
 * date-created: 19-march-2022
 * functionality: render the feedbacks of the users related to publishers products
 * caller-function: ecommerce-frontend\src\publisher\components\Dashboard.js
 */
import React from 'react'
import {
  Rating
} from '@mui/material'


export default function Feedbacks() {
  let [feedbacks, setFeedbacks] = React.useState([])
  React.useEffect(() => {
    async function getFeedbacks() {
      let response = await fetch('http://127.0.0.1:8000/api/customer/feedback/list-all/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      response = await response.json()
      return response
    }
    let f = getFeedbacks()
    f.then(res => {
      setFeedbacks(res.payload)}
      )
    f.catch(err => console.log('error encountered'))
  }, [])

  return (
    <section className="pb-6 lg:pb-10 bg-[#F3F4F6]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          {/* single feedback block */}
          {
            feedbacks.map(f => {
              return <FeedbackBlock data={f} key={f.feedbackId} />
            })
          }
        </div>
      </div>
    </section>
  )
}

function FeedbackBlock(props) {
  /**
   * 
   */
  let feedbacks = props.data
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 px-4">
      <div className="bg-white rounded-lg overflow-hidden mb-2">
        <div className="p-8 sm:p-9 md:p-7 xl:p-4 text-center">
          <p className="text-base text-body-color leading-relaxed mb-7">
            {feedbacks.review}
          </p>
          <div className="flex items-center">
            <Rating name="read-only" value={feedbacks.starValue} readOnly />
          </div>
        </div>
      </div>
    </div>
  )
}
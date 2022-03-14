/**
 * author: akash trivedi
 * date-created: 8-march-2022
 * functionality: 
 * caller-function: 
 */
import React from 'react'

export default function AddProduct() {
  return (
    <div className='container text-center'>
      <form action="" method="post">
        <div className='mb-4'>
          <label htmlFor="">Product Name: </label>
          <input type="text" name="" id="" style={{border:"1px solid black"}}/>
        </div>
        <div className='mb-4'>
          <label htmlFor="">Company Name: </label>
          <input type="text" name="" id=""  style={{border:"1px solid black"}}/>
        </div>
        <div className='mb-4'>
          <label htmlFor="">Description: </label>
          <textarea name="" id="" cols="15" rows="2" style={{border:"1px solid black"}}></textarea>
        </div>
        <div className='mb-4' >
          <label htmlFor=""></label>
          <input type="text" />
        </div>
      </form>
    </div>
  )
}

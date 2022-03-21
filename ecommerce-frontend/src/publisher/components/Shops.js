import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'


function ShopBlock(props) {
  const { name, pincode, address, registrationDate, city, state, sales } = props.data
  const registrationDate1 = new Date(registrationDate)
  return (
    <div className="p-2 lg:w-1/2 md:w-full capitalize">
      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
        <div className="w-8 h-8 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{name}</h2>
          <p className="leading-relaxed text-base font-semibold lowercase">
            address:&nbsp;<i className='font-normal capitalize'>{address}, {pincode}, {city}, {state}</i>
          </p>
          <p className="leading-relaxed text-base font-semibold lowercase">
            registration date: &nbsp;<i className='font-normal capitalize'>{registrationDate.slice(0, 10)}</i>
          </p>
          <p className="leading-relaxed text-base font-semibold lowercase">
            sale: &nbsp;<i className='font-semibold capitalize text-lime-500'>{sales}</i>
          </p>
        </div>
      </div>
    </div>
  );
}


export default function Shops() {
  const location = useLocation();
  const shops = location.state.shops;
  return (
    <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
      <div className="flex flex-col flex-wrap sm:flex-row ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            {
              shops === null ? true : (
                shops.map((shop) => {
                  return <ShopBlock data={shop} key={shop.shopId} />
                })
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

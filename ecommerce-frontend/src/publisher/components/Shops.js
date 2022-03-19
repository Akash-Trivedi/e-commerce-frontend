import React from 'react'

function ShopBlock(props) {
  const { name, pincode, address, registrationDate } = props.data
  return (
    <div className="p-4 lg:w-1/2 md:w-full">
      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
        <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{name}</h2>
          <p className="leading-relaxed text-base">{address}</p>
          <p className="leading-relaxed text-base">{pincode}</p>
          <p className="leading-relaxed text-base">{registrationDate}</p>
        </div>
      </div>
    </div>
  );
}


export default function Shops(props) {
  let shops = props.data
  return (
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
  )
}

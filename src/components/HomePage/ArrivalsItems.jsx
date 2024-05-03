import React from 'react'

export const ArrivalsItems = ({title, Img, reviews, price, status}) => {
  return (
    <div className='ArrivalItems flex flex-col justify-start items-center gap-2 w-52 h-fit bg-white py-2 px-3 rounded-lg'>
        <div className="Image w-full h-36 bg-center bg-cover bg-no-repeat rounded-lg" style={{
        backgroundImage: `url(${Img})`}}></div>
        <div className="Description w-full h-full flex-grow flex flex-col justify-start text-xs text-gray-800 pb-3 gap-3">
            <div className="title flex justify-between ">
                <div className="left flex flex-col justify-start  gap-1">
                  <p>{title}</p>
                  <p className=''>Al Karam</p>
                </div>
                <p className=' flex justify-start'>Star</p>
            </div>
            <p className="reviews flex justify-between items-center">{reviews}</p>
            <div className="price flex justify-between items-center">
                <p>{price}</p>
                <p className="status">{status}</p>
            </div>
        </div>
    </div>
  )
}

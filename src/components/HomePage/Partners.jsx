import React from 'react'

export const Partners = () => {
  return (
    <div className=' w-full flex flex-col relative bg-inherit'>
        <div className="div CartNav h-12 w-18 flex justify-end items-center self-end absolute -top-12 right-2">
        <div className="cart px-2 py-2 bg-gray-800 rounded-md flex justify-center items-center gap-10 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg></div>
<div className="cart px-2 py-2 rounded-lg cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(31 41 55)" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</div>
        </div>
        <div className="partnerLogo flex justify-center items-center gap-10 py-10 h-full">
            <img src=".\src\assets\Partners\chanel.png" alt=""  className=' w-36'/>
            <img src=".\src\assets\Partners\louis_vuition.png" alt=""  className=' w-36'/>
            <img src=".\src\assets\Partners\prada.png" alt="" className='w-36'/>
            <img src=".\src\assets\Partners\calvinklein.png" alt="" className=' w-36' />
            <img src=".\src\assets\Partners\denim.png" alt=""  className=' w-36'/>
        </div>
    </div>
  )
}

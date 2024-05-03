import React from 'react'

export const NavBar = () => {

  return (
    <div className=' w-5/6 h-16  my-0 mx-auto py-10 flex justify-between items-center'>
        <h2 className='BrandName text-gray-800 mb-8 text-2xl flex justify-center items-center pt-5'>FascoShop</h2>
        <div className="navLinks flex justify-start items-center">
            <a href='#'><p className='text-sm text-gray-800 mr-8'>Home</p></a>
            <a href='#Deals'><p className='text-sm text-gray-800 mr-8'>Deals</p></a>
            <a href='#Arrivals'><p className='text-sm text-gray-800 mr-8'>New Arrivals</p></a>
            <a href='#Packages'><p className='text-sm text-gray-800 mr-8'>Packages</p></a>
            <a href='#SignIn'><p className='text-sm text-gray-800 mr-8'>Sign In</p></a>
            <a href='#SignUp'><p className='text-xs text-white bg-slate-800 rounded-md py-2 px-5'>Sign Up</p></a>
        </div>

    </div>
  )
}

import React from 'react'
import { ArrivalsItems } from './ArrivalsItems'

export const NewArrivals = () => {
  return (
    <div className='NewArrivals w-full bg-gray-50'>
        <div className="ArrivalsWrapper flex flex-col justify-start items-center gap-3 w-5/6 h-full py-10 my-0 mx-auto">
            <h1 className=' text-gray-800 text-center font-semibold'>New Arrivals</h1>
            <p className=' text-gray-800 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin</p>
            <div className="categories flex justify-start items-center gap-5">
              <p className=' DealsBtn flex text-xs text-gray-800 hover:bg-slate-800 hover:text-white bg-slate-300 rounded-md py-2 px-5 my-2 cursor-pointer'>Men's Fashion</p>
              <p className=' DealsBtn flex text-xs text-gray-800 hover:bg-slate-800 hover:text-white bg-slate-300 rounded-md py-2 px-5 my-2 cursor-pointer'>Women's Fashion</p>
              <p className=' DealsBtn flex text-xs text-gray-800 hover:bg-slate-800 hover:text-white bg-slate-300 rounded-md py-2 px-5 my-2 cursor-pointer'>Women's Accesories</p>
              <p className=' DealsBtn flex text-xs text-gray-800 hover:bg-slate-800 hover:text-white bg-slate-300 rounded-md py-2 px-5 my-2 cursor-pointer'>Men's Fashion</p>
              <p className=' DealsBtn flex text-xs text-gray-800 hover:bg-slate-800 hover:text-white bg-slate-300 rounded-md py-2 px-5 my-2 cursor-pointer'>Discount Deals</p>
            </div>
            <div className="ArrivalBoxes grid grid-cols-4 justify-start items-center gap-10 mt-5">
                <ArrivalsItems title='Shappy dress' reviews='(4.1k) reviews' price='$365' status='Almost sold out' Img={'./src/assets/Deals/deal4.jpg'}/>
                <ArrivalsItems title='Shappy dress' reviews='(4.1k) reviews' price='$365' status='Almost sold out' Img={'./src/assets/Deals/deal4.jpg'}/>
                <ArrivalsItems title='Shappy dress' reviews='(4.1k) reviews' price='$365' status='Almost sold out' Img={'./src/assets/Deals/deal4.jpg'}/>
                <ArrivalsItems title='Shappy dress' reviews='(4.1k) reviews' price='$365' status='Almost sold out' Img={'./src/assets/Deals/deal4.jpg'}/>
                <ArrivalsItems title='Shappy dress' reviews='(4.1k) reviews' price='$365' status='Almost sold out' Img={'./src/assets/Deals/deal4.jpg'}/>
                <ArrivalsItems title='Shappy dress' reviews='(4.1k) reviews' price='$365' status='Almost sold out' Img={'./src/assets/Deals/deal4.jpg'}/>
                <ArrivalsItems title='Shappy dress' reviews='(4.1k) reviews' price='$365' status='Almost sold out' Img={'./src/assets/Deals/deal4.jpg'}/>
                <ArrivalsItems title='Shappy dress' reviews='(4.1k) reviews' price='$365' status='Almost sold out' Img={'./src/assets/Deals/deal4.jpg'}/>
            </div>
            <button className=' DealsBtn flex text-xs text-white bg-slate-800 rounded-md py-2 px-5 my-2 cursor-pointer'>View More</button>

            
        </div>

    </div>
  )
}

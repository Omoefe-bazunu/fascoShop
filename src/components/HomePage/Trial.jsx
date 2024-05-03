import React from 'react'

export const Trial = () => {
    let i = 0;
    let images = [];
    const limit = 2
    
    images[0] = './src/assets/Deals/deal1.png'
    images[1] = './src/assets/Deals/deal2.png'
    images[2] = './src/assets/Deals/deal4.jpg'
    images[3] = './src/assets/Deals/deal4.png'

    const next = () => {
        const Img = document.getElementById('dealImg1');
        const Img2 = document.getElementById('dealImg2');
        const Img3 = document.getElementById('dealImg3');
        Img.style.backgroundImage = `url(${images[i]})`;
        Img2.style.backgroundImage = `url(${images[i+1]})`;
        Img3.style.backgroundImage = `url(${images[i+2]})`;
        if (i < limit) {
            i++
        } else {
            Img.style.backgroundImage = `url('./src/assets/Deals/deal1.png')`
            Img2.style.backgroundImage = `url('./src/assets/Deals/deal2.png')`
            Img3.style.backgroundImage = `url('./src/assets/Deals/deal4.jpg')`
        }
    }

    const prev = () => {
        const Img = document.getElementById('dealImg1');
        const Img2 = document.getElementById('dealImg2');
        const Img3 = document.getElementById('dealImg3');
        if (i > 0) {
            i--; // Decrement the index to go to the previous image
            Img.style.backgroundImage = `url(${images[i]})`;
            Img2.style.backgroundImage = `url(${images[i+1]})`;
            Img3.style.backgroundImage = `url(${images[i+2]})`;
        } else {
           // Set index to the last image if already at the first image
           Img.style.backgroundImage = `url('./src/assets/Deals/deal1.png')`
           Img2.style.backgroundImage = `url('./src/assets/Deals/deal2.png')`
           Img3.style.backgroundImage = `url('./src/assets/Deals/deal3.jpg')`
        }
    }

  return (
    <div className=' h-96 w-full bg-inherit flex justify-center items-center text-gray-800 bg-gray-200'>
        <div className="DealsInner w-5/6 h-full flex justify-start items-center bg-inherit py-10">
        <div className="Dealsleft flex flex-col justify-start gap-2 h-full pr-10 w-full">
            <h2 className=' font-semibold'>Deals of the Month</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
            <button className=' DealsBtn flex text-xs text-white bg-slate-800 rounded-md py-2 px-5 my-2 w-24 cursor-pointer'>Buy Now</button>
            <div className="Counter flex flex-col justify-start">
                <p className="CTA">Hurry! Before its too late</p>
                <div className="Clock flex justify-start gap-3 text-sm mt-2">
                    <div className="days flex flex-col gap-2 justify-start items-center ">
                        <p className="figure rounded-lg py-2 px-2 bg-gray-50 text-center">02</p>
                        <p className="description text-center">Days</p>
                    </div>
                    <div className="hours flex flex-col gap-2 justify-start">
                        <p className="figure rounded-lg py-2 px-2 bg-gray-50 text-center">03</p>
                        <p className="description text-center">Hr</p>
                    </div>
                    <div className="minutes flex flex-col gap-2 justify-start">
                        <p className="figure rounded-lg py-2 px-2 bg-gray-50 text-center">11</p>
                        <p className="description text-center">Mins</p>
                    </div>
                    <div className="seconds flex flex-col gap-2 justify-start items-center">
                        <p className="figure rounded-lg py-2 px-2 bg-gray-50 text-center">09</p>
                        <p className="description text-center">Sec</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="button flex justify-end items-end w-18 h-full px-2 mr-3 gap-1">
                <button onClick={prev} className=' w-2/4 p-1 rounded-full bg-gray-50 cursor-pointer' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
  <path fill-rule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
</svg>
</button>
                <button onClick={next} className=' w-2/4 rounded-full p-1 bg-gray-50 cursor-pointer' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
  <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
</button>
        </div>
        <div className="right flex w-full h-full flex-grow gap-2">
            <div id ='dealImg1' className=' w-96 h-full bg-slate-500 bg-cover bg-no-repeat bg-center flex justify-start items-end p-3' style={{
        backgroundImage: `url('./src/assets/Deals/deal1.png')`}}>
            <div className="discount bg-gray-50 text-gray-800 text-xs py-4 px-3">
            <p>01 - Spring Sole</p>
            <p>30% OFF</p>
            </div>
        </div>
            <div className="rightMost h-full w-full flex flex-col">
                <div className="toplevel h-full w-full flex justify-start items-center flex-grow gap-2 relative overflow-hidden">
                    <div id ='dealImg2' className=' w-48 h-full bg-slate-500 bg-cover bg-no-repeat bg-center' style={{
        backgroundImage: `url('./src/assets/Deals/deal2.png')`}}></div>
                    <div id ='dealImg3' className=' w-48 h-full bg-slate-800 bg-cover bg-no-repeat bg-center absolute -right-10' style={{
        backgroundImage: `url('./src/assets/Deals/deal4.jpg')`}}></div>
                </div>
                <div className="checkBoxes w-full h-16 justify-start items-end gap-2 flex">
                    <div className="circles w-1 h-1 bg-slate-800 rounded-full"></div>
                    <div className="circles w-1 h-1 bg-slate-800 rounded-full"></div>
                    <div className="circles w-1 h-1 bg-slate-800 rounded-full"></div>
                    <div className="circles w-1 h-1 bg-slate-800 rounded-full"></div>

                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

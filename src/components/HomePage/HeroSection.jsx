

export const HeroSection = () => {
  return (
    <>
    <div className='HeroWrapper w-5/6  mt-10 mx-auto flex justify-center items-center gap-5'>
      <img src=".\src\assets\HomePage\Hero2.jpg" alt="" className="Image1 bg-slate-400 h-full w-full rounded-lg bg-cover bg-center bg-no-repeat " />
      <div className="ImageText w-full h-full rounded-lg flex flex-col">
        <img src=".\src\assets\HomePage\heromid1.png" alt="" className="topImage rounded-lg  w-full bg-slate-600 h-64 bg-cover bg-center bg-no-repeat" />
        <div className="mid h-full w-full flex grow px-5 flex-col justify-start py-3 items-center">
          <h1 className="mainText text-5xl text-center text-gray-800 font-medium">ULTIMATE</h1>
          <h1 className=" text-7xl text-gray-800 font-semibold">SALE</h1>
          <p className=" mt-3 text-gray-800">NEW COLLECTION</p>
          <p className="text-xs text-white bg-slate-800 rounded-md py-2 px-5 mt-3">SHOP NOW</p>
        </div>
        <img src=".\src\assets\HomePage\heromid2.png" alt="" className="bottomImage rounded-lg  w-full bg-slate-600 h-64 bg-cover bg-center bg-no-repeat" />
      </div>
      <img src=".\src\assets\HomePage\hero1.png" alt="" className="Image2 w-full h-full rounded-lg bg-cover bg-center bg-no-repeat" />
    </div>
    </>
  )
}

import React from 'react'

export const SignInPage = () => {
  return (
    <div className=' w-5/6 my-0 mx-auto h-full flex justify-center items-center'>
      <div className="SignUp-InnerWrapper w-full flex justify-start items-center border-2 border-slate-200">
        <img src=".\src\assets\SignPage\winter.jpg" alt="FeaturedImage" className="FeaturedImage w-8/12 h-full flex-grow bg-slate-400 bg-cover bg-center bg-no-repeat" />
        <div className="SignUpDetails flex flex-col start items-center h-fit w-full py-10">
          <div className="childOne w-full text-center px-10 ">
            <h2 className='BrandName text-gray-800 mb-8 text-2xl'>FascoShop</h2>
            <div className="GoogleSign flex flex-col justify-center items-center bg-inherit">
              <h2 className="SignUpText text-gray-800 mb-3 text-sm">Sign in to FascoShop</h2>
              <div className="GoogleLogo w-full text-gray-800 flex justify-center items-center rounded-3xl border border-red-100 py-1 mx-auto cursor-pointer">
                <img src='.\src\assets\SignPage\goggle.png' alt="Google-Icon" className=' w-8'/>
                <p className=' text-xs'>Sign in with Google</p>
              </div>
            </div>
          </div>
            <p className=' w-full text-center text-gray-800 text-xs my-5 mx-auto'>- Or -</p>
          <div className="childThree w-full px-10 flex flex-col justify-start items-center ">
            <form className='text-xs text-gray-800 grid grid-cols-1 gap-5 w-full'>
              <input type="email" placeholder='Email' name = 'email' className="email bg-inherit border-b border-slate-400 pb-2 cursor-pointer outline-none" />
              <input type="password" placeholder='Password' name = 'password' className="password bg-inherit border-b border-slate-400 pb-2 cursor-pointer outline-none" />
              <p className="forgotPassword text-red-600 text-center">Forgot Password?</p>
            </form>
            <button type='submit' className='py-2 mt-5 mx-auto px-36 bg-gray-900 rounded-3xl text-white text-center text-sm cursor-pointer'>Sign In</button>
          </div>
          <p className="loginOpt text-gray-800 text-xs mt-2">No account yet? <span className=' text-blue-600 cursor-pointer'>Register</span></p>
        </div>

      </div>
        
    </div>
  )
}

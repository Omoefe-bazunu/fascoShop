
export const ResetPasswordPage3 = () => {
  return (
    <div className=' w-5/6 my-0 mx-auto h-full flex justify-center items-center'>
      <div className="SignUp-InnerWrapper w-full flex justify-start items-center border-2 border-slate-200">
        <img src=".\src\assets\SignPage\winter.jpg" alt="FeaturedImage" className="FeaturedImage w-8/12 h-full flex-grow bg-slate-400 bg-cover bg-center bg-no-repeat" />
        <div className="SignUpDetails flex flex-col start items-center h-fit w-full py-10">
          <div className="childOne w-full text-center px-10 ">
            <h2 className='BrandName text-gray-800 mb-8 text-2xl'>FascoShop</h2>
            <div className="GoogleSign flex flex-col justify-center items-center bg-inherit">
              <h2 className="SignUpText text-gray-800 mb-10 text-sm">Forgot Password - step 3</h2>
            </div>
          </div>
          <div className="childThree w-full px-10 flex flex-col justify-start items-center ">
            <form className='text-xs text-gray-800 grid grid-cols-1 gap-5 w-full'>
              <input type="password" placeholder='Enter New Password' name = 'NewPassword' className="NewPassword bg-inherit border-b border-slate-400 pb-2 cursor-pointer outline-none w-full text-center" />
              <input type="text" placeholder='Confirm New Password' name = 'confirmPassword' className="confirmPassword bg-inherit border-b border-slate-400 pb-2 cursor-pointer outline-none w-full text-center" />
            </form>
            <button type='submit' className='py-2 mt-8 mx-auto px-36 bg-gray-900 rounded-3xl text-white text-center text-sm cursor-pointer'>Submit</button>
          </div>
        </div>

      </div>
        
    </div>
  )
}

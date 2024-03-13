import React from 'react'
import { vector } from '../../assets/loginsignUp/const'

const Login = () => {
  return (
    <>
      <div className='w-full h-screen bg-[#F1E8D7] flex justify-start items-center flex-col  '>
        <p className='text-6xl mt-40 mb-5 font-semibold'>Sign in</p>
        <p className='text-lg mb-3'>Sign into your account to be able to make operations on the system</p>
        <div className=' w-[25%] mb-5'>
          <label class="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
          <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7]   " placeholder="moise@gmail.com" required />
        </div>
        <div className=' w-[25%] mb-3'>
          <label class="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
          <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7]   " placeholder="Password" required />
        </div>
        <div className=' w-[25%] mb-3 '>
          <div className='flex gap-2 '>
            <input type="checkbox" className='cursor-pointer' />
            <label htmlFor="sasa" className='text-xs font-semibold'>Remember me</label>
            <a href='#' className='font-font-semibold text-xs ml-5 text-[#F46A06]'>Forgot password?</a>
          </div>
        </div>
        <div className=' w-[25%] mb-3'>
          <button className='bg-[#F46A06] hover:bg-[#f46906ee] outline-none duration-200 w-full py-[0.5rem] text-white font-normal rounded-md shadow-lg '>Login</button>
        </div>
        <div className='w-[25%] mb-[6.1rem]'>
          <p>Don't have an account?
            <a href="#" className='font-font-semibold text-xs ml-5 text-[#F46A06]'>
              Register Now
            </a>
          </p>
        </div>
        <img src={vector} className='w-full' alt="Image" />
      </div>
    </>

  )
}

export default Login

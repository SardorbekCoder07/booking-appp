import React from 'react'
import { Link } from 'react-router-dom'
import { vector } from '../../assets/loginsignUp/const'

const SignUp = () => {
    return (
        <div
            className='w-full h-screen bg-[#F1E8D7] flex justify-start items-center flex-col  '>
            <p className='text-6xl mt-20 mb-5 font-semibold'>Create account</p>
            <p className='text-lg mb-3'>Hello User, thank you for choosing this journey with Us lets create account first</p>
            <div className=' w-[25%] mb-3'>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">FullaName</label>
                <input name='email' id='Email' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7]   " placeholder="moise@gmail.com" required />
            </div>
            <div class="flex w-[25%] mb-3">
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                </span>
                <input type="text" id="website-admin" className='rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm  w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7]  ' placeholder="elonmusk" />
                {/* <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk"> */}
            </div>
            <div className=' w-[25%] mb-3'>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
                <input type="text" id='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7]   " placeholder="Password" required />
            </div>
            <div className=' w-[25%] mb-3 '>
                <div className='flex gap-2 '>
                    <input type="checkbox" className='cursor-pointer' />
                    <label htmlFor="sasa" className='text-xs font-semibold'>Remember me</label>
                    <a href='#' className='font-font-semibold text-xs ml-5 text-[#F46A06]'>Forgot password?</a>
                </div>
            </div>
            <div className=' w-[25%] mb-3'>
                <button
                    // onClick={handleSubmit}
                    className='bg-[#F46A06] hover:bg-[#f46906ee] outline-none duration-200 w-full py-[0.5rem] text-white font-normal rounded-md shadow-lg '>Login</button>
            </div>
            <div className='w-[25%] mb-[6.1rem]'>
                <p>Don't have an account?
                    <Link to='/' className='font-font-semibold text-xs ml-5 text-[#F46A06]'>
                        Register Now
                    </Link>
                </p>
            </div>
            <img src={vector} className='w-full' alt="Image" />
        </div>
    )
}

export default SignUp

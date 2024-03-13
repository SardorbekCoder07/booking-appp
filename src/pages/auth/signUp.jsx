import React from 'react'
import { Link } from 'react-router-dom'
import { union, vector } from '../../assets/loginsignUp/const'

const SignUp = () => {
    return (
        <div
            className='w-full h-screen bg-[#F1E8D7] flex justify-start items-center flex-col  '>
            <p className='text-6xl mt-20 mb-5 font-semibold'>Create account</p>
            <p className='text-lg mb-3'>Hello User, thank you for choosing this journey with Us lets create account first</p>
            <div className=' w-[25%] mb-3'>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">FullaName</label>
                <input name='email' id='Email' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7] placeholder:text-[#A5A4A4] placeholder:text-sm   " placeholder="Enter your name" required />
            </div>
            <div class=" w-[25%] mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
                <div className='flex'>
                    <span className="inline-flex  items-center px-4 text-sm text-gray-900 bg-transparent outline-none   border rounded-e-0 border-black rounded-s-md ">
                        <img src={union} alt="Union" />
                        <span className='font-bold text-sm'>+250</span>
                    </span>
                    <input type="text" id="website-admin" className='rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm  w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7]  ' placeholder="Enter your number" />
                </div>

            </div>
            <div className=' w-[25%] mb-3'>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                <input type="text" id='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7]   " placeholder="Enter your email" required />
            </div>
            <div className=' w-[25%] mb-16'>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input type="password" id='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7]   " placeholder="Password" required />
            </div>
           
            <div className=' w-[25%] mb-7'>
                <button
                    // onClick={handleSubmit}
                    className='bg-[#F46A06] hover:bg-[#f46906ee] outline-none duration-200 w-full py-[0.5rem] text-white font-normal rounded-md shadow-lg '>Sign up</button>
            </div>
            
            <img src={vector} className='w-full' alt="Image" />
        </div>
    )
}

export default SignUp

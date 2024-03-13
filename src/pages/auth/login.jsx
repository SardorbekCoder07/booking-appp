import React, { useState } from 'react'
import { vector } from '../../assets/loginsignUp/const'
import { database } from './firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  const [emailVal, setEmailVal] = useState(null)
  const history=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const  email = document.getElementById('Email').value
    const  password = document.getElementById('password').value

    createUserWithEmailAndPassword(database,email,password).then(res=>{
      console.log(res,'authdata');
      history('/HomeRestaurant')
      alert("Succesfully")
    })
  }

  return (
    <>
      <div
        className='w-full h-screen bg-[#F1E8D7] flex justify-start items-center flex-col  '>
        <p className='text-6xl mt-40 mb-5 font-semibold'>Sign in</p>
        <p className='text-lg mb-3'>Sign into your account to be able to make operations on the system</p>
        <div className=' w-[25%] mb-5'>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
          <input name='email' id='Email' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7]   " placeholder="moise@gmail.com" required />
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
            onClick={handleSubmit}
            className='bg-[#F46A06] hover:bg-[#f46906ee] outline-none duration-200 w-full py-[0.5rem] text-white font-normal rounded-md shadow-lg '>Login</button>
        </div>
        <div className='w-[25%] mb-[6.1rem]'>
          <p>Don't have an account?
            <Link to='/signUp' className='font-font-semibold text-xs ml-5 text-[#F46A06]'>
              Register Now
            </Link>
          </p>
        </div>
        <img src={vector} className='w-full' alt="Image" />
      </div>
    </>

  )
}

export default Login

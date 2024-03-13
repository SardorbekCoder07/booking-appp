import React from 'react'
import { HomeSVG } from '../../../assets/loginsignUp/const'

const MainAdminNav = () => {
  return (
    <div className='flex w-full items-center justify-between '>
      <div className='flex items-center'>
        <img src={HomeSVG} alt="This is Home image" />
        <p>
            <span className='text-5xl font-extralight'> /</span>
            Home</p>
      </div>
      <div className='gap-2 flex '>
        <input type="text" className='rounded-md outline-none pl-4 px-3' />
        <button className='px-3 rounded-md bg-[#F46A06] text-black hover:bg-slate-50 duration-200 border-2 border-[#FFF]'>Search</button>
      </div>
    </div>
  )
}

export default MainAdminNav

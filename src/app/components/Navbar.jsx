import React from 'react'
import Container from './Container'
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="bg-[#F3FBF4] py-[14px]">
    <Container>
        <div className="navbar">
  <div className="flex-1">
    <div className="flex">
        <div className="bg-[#05893E] h-10 w-10  rounded-[5px] flex items-center justify-center">
          <Link href="/">
          
   <Image src="/logo.png"
              height={28}
              width={18}
              alt="logo"
              style={{ width: "auto", height: "auto" }}
              />   
          </Link>
    </div>
    <div className="pl-2">
        <h4 className='font-bangla font-bold text-[20px] '>বাজার দর</h4>
        <p className='font-bangla font-normal text-[12px] '>মঙ্গলবার, ৬ অক্টোবর, ২০২৬</p>
    </div>
    </div>
  </div>
  <div className="flex-none">
   {/* <div className="flex items-center gap-x-2">
     <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    <div className="">
      <h1>name</h1>
    </div>
   </div> */}
   <div className="flex gap-x-6 itemcsc
   ">
      <button className='cursor-pointer font-bangla font-semibold text-black text-[14px] '>সাইন ইন</button>
      <button className='bg-[#05893E] py-2.5 px-5 rounded-[10px] cursor-pointer font-bangla font-semibold text-white text-[14px] '>সাইন আপ</button>
    </div>
  </div>
     </div>
   </Container>
    </div>
  )
}

export default Navbar
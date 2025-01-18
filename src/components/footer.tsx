import React from 'react';
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>


{/* ---------------Div 1----------------- */}
<div className='w-full h-20 md:my-12'>
    <Image src='/images/footerlogos.png' alt='footer logos' width={1200} height={600} />
</div>

        {/* ---------------Div 2----------------- */}
        <div className='bg-[#EEEFFB] w-full h-full flex flex-col items-center gap-16 px-16 lg:flex-row lg:h-96'>
            {/* ---------------Div List 1----------------- */}
<ul>
    <li className='font-[josefin Sans] font-extrabold tracking-widest pb-7 text-2xl pt-5 md:text-4xl'>Hekto</li> 
    <li >
        <input type="text" placeholder='Enter Email Address' className='px-3 py-2'/> 
        <button className='bg-pink-600 text-white px-3 py-2 mt-3 md:mt-0'>Sign up</button>
        </li>
        <li className='text-gray-400 pt-7'>Contact Info <br />17 Prince Road, London, Greater London NW1</li>
</ul>
{/* ---------------Div List 2----------------- */}
<ul>
    <li className='font-[josefin Sans] font-extrabold tracking-widest text-2xl pb-4'>Categories</li>
    <li className='text-gray-400 pb-3'>Laptops & Computers</li>
    <li className='text-gray-400 pb-3'>Cameras & Photography</li>
    <li className='text-gray-400 pb-3'>Smart Phones & Tables</li>
    <li className='text-gray-400 pb-3'>Video Games & Consoles</li>
</ul>
{/* ---------------Div List 3----------------- */}
<ul>
    <li className='font-[josefin Sans] font-extrabold tracking-widest text-2xl pb-4'>Customer Care</li>
    <li className='text-gray-400 pb-3'>My Account</li>
    <li className='text-gray-400 pb-3'>Discount</li>
    <li className='text-gray-400 pb-3'>Returns</li>
    <li className='text-gray-400 pb-3'>Order History</li>
</ul>
{/* ---------------Div List 4----------------- */}
<ul>
    <li className='font-[josefin Sans] font-extrabold tracking-widest text-2xl pb-4'>Pages</li>
    <li className='text-gray-400 '>Blog</li>
    <li className='text-gray-400 pb-3'>Browse the Shop</li>
    <li className='text-gray-400 pb-3'>Category</li>
    <li className='text-gray-400 pb-3'>Pre-Built Pages</li>
    <li className='text-gray-400 pb-3'>Visual Composer Elements</li>
</ul>
        </div>
        <hr />
         {/* ---------------Div 3----------------- */}
        <div className='bg-gray-300 flex-col justify-center items-center px-24 py-10 h-28 md:flex-row  md:px-32 md:justify-between lg:h-224'>
            {/* ---------------Div Copyright----------------- */}
            <div>
<p className='text-gray-700 text-center'>&copy;Webecy-All Rights Reserved</p>
</div>
{/* ---------------Div Icons----------------- */}
<div className='flex gap-3 justify-center pb-4'>
<FaFacebook className='text-blue-950' />
<FaInstagram className='text-blue-950'/>
<FaTwitter className='text-blue-950'/>
</div>
        </div>
    </footer>
  )
}

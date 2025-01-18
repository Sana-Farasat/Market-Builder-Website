import React from 'react'

export default function Account() {
  return (
    <div>
        {/* ----------------Div 1---------------- */}
        <div className='bg-[#EEEFFB] w-full h-48 pt-7 pl-4 md:pl-24'>
            <h2 className='font-[josefin Sans] font-extrabold tracking-widest pb-3 text-3xl pt-5'>My Account</h2>
            <p className='font-semibold'>Home . Pages . <span className='font-semibold text-pink-600'>My Account</span></p>
        </div>

{/* ----------------Div 2---------------- */}
<div className='bg-white shadow-lg flex flex-col my-10 py-10 mx-3 md:mx-32 lg:mx-80 xl:mx-96'>
    <h2 className='font-bold text-2xl text-center'>Login</h2>
    <p className='text-gray-400 text-center'>Please login using account detailed below.</p>
    <br />
    <input type="email" name="account" id="login" placeholder='Email Address' className='text-gray-400 border border-gray-400 px-6 mx-16 py-2'/>
    <br />
    <input type="password" name="account" id="login" placeholder='Password' className='text-gray-400 border border-gray-400 px-6 mx-16 py-2'/>
    <br />
    <p className='text-gray-400 pl-14'>Forgot your password?</p>
    <br />
    <button className='bg-pink-600 text-white text-center mx-16 py-2'>Sign in</button>
    <br />
    <p className='text-gray-400 text-center'>Don`&apos;`t have an account? Create account</p>
</div>
    </div>
  )
}

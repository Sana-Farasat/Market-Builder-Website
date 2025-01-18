import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
        {/* ----------------Div 1---------------- */}
        <div className='bg-[#EEEFFB] w-full h-48 pt-7 pl-4 md:pl-24'>
            <h2 className='font-[josefin Sans] font-extrabold tracking-widest pb-3 text-3xl pt-5'>404 Not Found</h2>
            <p className='font-semibold'>Home . Pages . <span className='font-semibold text-pink-600'>404 Not Found</span></p>
        </div>

 {/* ----------------Div 2---------------- */}
<div className='flex justify-center items-center'>
<Image src="/images/404page.png" alt='404page' height={800} width={1000} />
</div>

{/* ----------------Div 3---------------- */}

<Link href="/" className='flex justify-center my-7'>
<button className='bg-[#FB2E86] text-white px-3 py-2 md:px-6 md:py-3'> Back to Home</button>
</Link>
    </div>
  )
}

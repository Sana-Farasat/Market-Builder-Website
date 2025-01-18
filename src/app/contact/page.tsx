import React from 'react'
import { FaCircle } from 'react-icons/fa';
import Image from 'next/image';

export default function Contact() {
  return (
    <div>
         {/* ----------------Div 1---------------- */}
         <div className='bg-[#EEEFFB] w-full h-48 pt-7 pl-4 md:pl-24'>
            <h2 className='font-[josefin Sans] font-extrabold tracking-widest pb-3 text-3xl pt-5'>Contact Us</h2>
            <p className='font-semibold'>Home . Pages . <span className='font-semibold text-pink-600'>Contact Us</span></p>
        </div>

        {/* ----------------Div 2---------------- */}
<div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 my-20 mx-4 md:mx-8 lg:mx-36'>
    
        {/* ----------------Part 1---------------- */}
        <div> 
           <h2 className='text-[#151875] text-2xl font-extrabold py-3 font-[josefin Sans] tracking-widest'>Information About Us</h2>
           <br />
           <p className='text-gray-400 text-sm md:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aspernatur eum nostrum blanditiis officia quia harum quaerat et excepturi veritatis. Delectus soluta sapiente velit tenetur debitis! Architecto cupiditate amet ipsa.</p>
           <br />
           <p className='flex gap-2'><span className='text-orange-600'><FaCircle /></span><span><FaCircle className='text-pink-600' /></span><span><FaCircle className='text-blue-600'/></span></p>
        </div>

        {/* ----------------Part 2---------------- */}
                <div>
                <h2 className='text-[#151875] text-2xl font-extrabold py-3 font-[josefin Sans]  tracking-widest'>Contact Way</h2>
                <br />
                {/* ----------------Inner Grid---------------- */}
                <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                    {/* ----------------Inner Grid 1---------------- */}
                <div className='flex gap-1 text-gray-400 text-sm md:text-base'>
                <FaCircle className='text-blue-600' />
                 Tel: 877-67-88-99
                 <br />
                 Email: shop@email.com
                </div>
                  {/* ----------------Inner Grid 2---------------- */}
                 <div className='flex gap-1 text-gray-400 text-sm md:text-base'>
                 <FaCircle className='text-pink-600' />
                 Support Forum  
                 <br />
                 For over 24hr
                 </div>
                 {/* ----------------Inner Grid 3---------------- */}
                 <div className='flex gap-1 text-gray-400 text-sm md:text-base'>
                 <FaCircle className='text-orange-600' />
                 20 Margaret St. London
                 <br />
                 Great Britain, 3Mnp
                 </div>
              {/* ----------------Inner Grid 4---------------- */}
               <div className='flex gap-1 text-gray-400 text-sm md:text-base'>
                 <FaCircle className='text-green-600' />
                 Free Standard Shipping
                 <br />
                 On all orders
                 </div>
                </div>

                </div>

         {/* ----------------Part 3---------------- */}
         <div>
        <h2 className='text-[#151875] text-justify text-2xl font-extrabold py-3 font-[josefin Sans] tracking-widest'>Get In Touch</h2>
        <br />
        <p className='text-gray-400 text-justify text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore id debitis similique dicta? Ullam vel nihil ab, laudantium ea nemo ut qui voluptates itaque iusto molestiae odit velit placeat nulla.</p>
        <br />
        <input type="text" name="contact" id="form" placeholder='Your Name' className='text-gray-400 border border-gray-400 px-2 py-2 my-1 mr-1'/>
        <input type="email" placeholder=' Your Email' className='text-gray-400 border border-gray-400 my-1 px-2 py-2'/>
        <br />
        <input type="text" name="contact" id="subject" placeholder='Subject' className='text-gray-400 border border-gray-400 my-1 px-2 py-2' />
        <br />
        <textarea name="contact" id="message" rows={4} cols={32} className='text-gray-400 border border-gray-400 my-1 mx-1 '>Type Your Message Here</textarea>
        <br />
        <button className='bg-pink-600 text-white px-4 py-2'>Send Mail</button>
         </div>

         {/* ----------------Part 4---------------- */}
         <div>
         <Image src="/images/contact.png" alt='Contact-Image' height={200} width={400} className='layout-responsive'/>
         </div>

        </div>

    </div>
  )
}

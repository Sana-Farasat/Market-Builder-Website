import React from 'react'

export default function Faq() {
  return (
    <div>
            {/* ----------------Div 1---------------- */}
                <div className='bg-[#EEEFFB] w-full h-48 pt-7 pl-4 md:pl-24'>
            <h2 className='font-[josefin Sans] font-extrabold tracking-widest pb-3 text-3xl pt-5'>FAQ</h2>
            <p className='font-semibold'>Home . Pages . <span className='font-semibold text-pink-600'>Faq</span></p>
            </div>

             {/* ----------------Div 2---------------- */}
             <div className='my-12 mx-4 lg:mx-20 xl:mx-28 grid gap-4 grid-cols-1 md:grid-cols-2'>
                {/* ----------------Left Side---------------- */}
                <div>
                  <h2 className='text-[#151875] text-xl text-justify font-extrabold font-[josefin Sans] tracking-widest'>Eu dictumst cum at sed euismood condimentum</h2>
                  <br />
                  <p className='text-gray-400 text-sm text-justify md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam omnis esse dolore autem ab, voluptatum totam natus laborum. Quas ullam accusantium culpa </p>

                  <br /> <br />

                  <h2 className='text-[#151875] text-xl text-justify font-extrabold font-[josefin Sans] tracking-widest'>Magna bibendum est fermentum eros</h2>
                  <br />
                  <p className='text-gray-400 text-sm text-justify md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam omnis esse dolore autem ab, voluptatum totam natus laborum. Quas ullam accusantium culpa </p>

<br /><br />

<h2 className='text-[#151875] text-xl text-justify font-extrabold font-[josefin Sans] tracking-widest'>Odion muskana hak eris  conseekin skeleton</h2>
                  <br />
                  <p className='text-gray-400 text-sm text-justify md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam omnis esse dolore autem ab, voluptatum totam natus laborum. Quas ullam accusantium culpa </p>

<br /><br />

<h2 className='text-[#151875] text-xl text-justify font-extrabold font-[josefin Sans] tracking-widest'>Elit id blandit sabara boi velit gua mara</h2>
                  <br />
                  <p className='text-gray-400 text-sm text-justify md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam omnis esse dolore autem ab, voluptatum totam natus laborum. Quas ullam accusantium culpa </p>




            
                </div>
                {/* ----------------Right Side---------------- */}
                <div className='bg-[#EEEFFB] w-full h-full py-16 md:py-32'>
                 
                 <h2 className='text-[#151875] text-xl font-extrabold font-[josefin Sans] pl-5'>Ask a Question </h2>
                 <br /><br /> <br />

                 <div className='flex flex-col justify-center mx-5'>
                 <input type="text" name="user-name" id="user" placeholder='Your Name' className=' text-gray-400 pl-2 py-2 border border-gray-400'/>

<br />

                 <input type="text" placeholder='Subject' className=' text-gray-400 pl-2 py-2 border border-gray-400'/>

<br />

                 <textarea name="" id="" rows={5} cols={16} className=' text-gray-400 pl-2 py-2 border border-gray-400'>Type Your Message</textarea>

                 </div>


<button className='bg-[#FB2E86] text-white ml-5 my-2 px-3 py-2 md:px-6 md:py-3'>Send Mail</button>



                </div>
             </div>


    </div>
  )
}

import React from "react";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import { HiMiniCalendarDateRange } from "react-icons/hi2";

export default function Blog() {
  return (
    <div>
      {/* ----------------Div 1---------------- */}
      <div className="bg-[#EEEFFB] w-full h-48 pt-7 pl-4 md:pl-24">
        <h2 className="font-[josefin Sans] font-extrabold tracking-widest pb-3 text-3xl pt-5">
          Blog Page
        </h2>
        <p className="font-semibold">
          Home . Pages .{" "}
          <span className="font-semibold text-pink-600">Blog Page</span>
        </p>
      </div>

      {/* ----------------Div 2---------------- */}

      {/* ----------------Part 1---------------- */}
      {/* ----------------Image Div---------------- */}
      <div className="flex justify-center items-center layout-responsive my-3">
        <Image src="/images/blog1.png" alt="blog" height={400} width={600} />
      </div>
      {/* ----------------Text Div---------------- */}
      <div className="flex flex-col justify-center items-center h-52 w-auto my-6">
        {/* ----------------Icons---------------- */}
        <div className="flex items-center gap-2 pt-12">
          <FaPenNib className="text-pink-600" />
          <span className="text-blue-900 bg-pink-300 px-2 py-1">
            Surf Auxion
          </span>
          <HiMiniCalendarDateRange className="text-orange-500" />
          <span className="text-blue-900 bg-orange-300 px-2 py-1">
            Aug 09 2020
          </span>
        </div>

        {/* ----------------Text---------------- */}
        <div>
          <h2 className="text-xl text-center text-[#151875] font-bold mb-3 tracking-widest font-[josefin Sans]  md:text-2xl lg:text-3xl">
            Mauris at orci non vulputatediam tincidunt nec.
          </h2>
          <p className="text-gray-400 text-center text-sm md:text-base lg:w-1/2 lg:mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            vitae est quidem atque, tenetur expedita, quas molestiae doloremque
            fuga deserunt porro alias dicta minima! Necessitatibus aut accusamus
            repudiandae deleniti laudantium.
          </p>
          <h2 className="text-[#151875] font-bold font-[josefin Sans text-center pb-10 ">
            Read More.
          </h2>
        </div>
      </div>

      {/* ----------------Part 2---------------- */}

      {/* ----------------Image Div---------------- */}
      <div className="flex justify-center items-center layout-responsive my-3">
        <Image src="/images/blog2.png" alt="blog" height={400} width={600} />
      </div>
      {/* ----------------Text Div---------------- */}
      <div className="flex flex-col justify-center items-center h-52 w-auto my-6">
        {/* ----------------Icons---------------- */}
        <div className="flex items-center gap-2 pt-12">
          <FaPenNib className="text-pink-600" />
          <span className="text-blue-900 bg-pink-300 px-2 py-1">
            Surf Auxion
          </span>
          <HiMiniCalendarDateRange className="text-orange-500" />
          <span className="text-blue-900 bg-orange-300 px-2 py-1">
            Aug 09 2020
          </span>
        </div>

        {/* ----------------Text---------------- */}
        <div>
          <h2 className="text-xl text-center text-[#151875] font-bold mb-3 tracking-widest font-[josefin Sans]  md:text-2xl lg:text-3xl">
            Mauris at orci non vulputatediam tincidunt nec.
          </h2>
          <p className="text-gray-400 text-center text-sm md:text-base lg:w-1/2 lg:mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            vitae est quidem atque, tenetur expedita, quas molestiae doloremque
            fuga deserunt porro alias dicta minima! Necessitatibus aut accusamus
            repudiandae deleniti laudantium.
          </p>
          <h2 className="text-[#151875] font-bold font-[josefin Sans text-center pb-10">
            Read More.
          </h2>
        </div>
      </div>

      {/* ----------------Part 3---------------- */}
      {/* ----------------Image Div---------------- */}
      <div className="flex justify-center items-center layout-responsive my-3">
        <Image src="/images/blog3.png" alt="blog" height={400} width={600} />
      </div>
      {/* ----------------Text Div---------------- */}
      <div className="flex flex-col justify-center items-center h-52 w-auto my-6">
        {/* ----------------Icons---------------- */}
        <div className="flex items-center gap-2 pt-12">
          <FaPenNib className="text-pink-600" />
          <span className="text-blue-900 bg-pink-300 px-2 py-1">
            Surf Auxion
          </span>
          <HiMiniCalendarDateRange className="text-orange-500" />
          <span className="text-blue-900 bg-orange-300 px-2 py-1">
            Aug 09 2020
          </span>
        </div>

        {/* ----------------Text---------------- */}
        <div>
          <h2 className="text-xl text-center text-[#151875] font-bold mb-3 tracking-widest font-[josefin Sans]  md:text-2xl lg:text-3xl">
            Mauris at orci non vulputatediam tincidunt nec.
          </h2>
          <p className="text-gray-400 text-center text-sm md:text-base lg:w-1/2 lg:mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            vitae est quidem atque, tenetur expedita, quas molestiae doloremque
            fuga deserunt porro alias dicta minima! Necessitatibus aut accusamus
            repudiandae deleniti laudantium.
          </p>
          <h2 className="text-[#151875] font-bold font-[josefin Sans text-center">
            Read More.
          </h2>
        </div>
      </div>
      {/* ----------------Div 3---------------- */}
      {/* ----------------Button Div---------------- */}
      <div className="flex justify-center items-center gap-2 my-16">
        <button className="bg-pink-600 text-white px-4 py-2">1</button>
        <button className="text-gray-400 border border-gray-400 px-4 py-2">
          2
        </button>
        <button className="text-gray-400 border border-gray-400 px-4 py-2">
          3
        </button>
        <button className="text-gray-400 border border-gray-400 px-4 py-2">
          4
        </button>
      </div>
    </div>
  );
}

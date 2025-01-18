import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* ----------------Div 1---------------- */}
      <div className="bg-[#EEEFFB] w-full h-48 pt-7 pl-4 md:pl-24">
        <h2 className="font-[josefin Sans] font-extrabold tracking-widest pb-3 text-3xl pt-5">
          About Us
        </h2>
        <p className="font-semibold">
          Home . Pages .{" "}
          <span className="font-semibold text-pink-600">About Us</span>
        </p>
      </div>

      {/* --------------Div 2----------------- */}

      <div className="h-auto w-full my-10 flex flex-col justify-center items-center px-9 md:px-9 lg:px-32 xl:px-72 md:flex-row md:my-20">
        {/* --------------Part 1----------------- */}
        <div className="layout-responsive w-full">
          <Image
            src="/images/aboutpage.png"
            alt="aboutimage"
            height={350}
            width={350}
          />
        </div>

        {/* --------------Part 2----------------- */}
        <div className="mt-4 ">
          <h2 className="text-xl text-[#151875] font-bold mb-3 tracking-widest font-[josefin Sans]  md:text-2xl lg:text-3xl">
            Know About Our Ecommerce <br />
            Buisness History
          </h2>

          <ul className="pl-4 text-gray-500 mb-2">
            <li>All frames constructed with hardwood solids and laminates </li>
            <li>Reinforces with double wood dowels , screw and glue</li>
            <li>Arms , back and seats are structurally reinforced</li>
          </ul>

          <button className="bg-[#FB2E86] text-white font-semibold px-4 py-1 my-2 md:px-8 md:py-3 md:my-4">
            Contact Us
          </button>
        </div>
      </div>

      {/* --------------Div 3----------------- */}

      <div>
        <h2 className="text-[#151875] text-2xl font-extrabold text-center my-7 font-[josefin Sans] tracking-widest py-5 md:py-0">
          Our Features
        </h2>
      </div>
      {/* --------------Main Div----------------- */}
      <div className=" w-auto flex flex-col justify-center items-center space-y-7 md:px-2 md:flex-row md:gap-3 lg:justify-evenly">
        {/* --------------Card 1----------------- */}
        <div className="bg-white shadow-lg max-w-sm mx-2 h-64 md:w-48 flex flex-col justify-center items-center">
          <Image
            src="/images/cardicon1.png"
            alt="cardicon1"
            height={60}
            width={60}
          />
          <h2 className="text-[#151875] font-[josefin Sans] font-extrabold">
            24/7 Support
          </h2>
          <p className="text-gray-400 text-[12px] font-bold p-7">
            Lorem ipsum dolor sit inhggdolor consectetur adipisicingsssefew
            elitex adipisicing elitex maiores beatae.
          </p>
        </div>

        {/* --------------Card 2----------------- */}
        <div className="bg-white shadow-lg max-w-sm mx-2 h-64 md:w-48 flex flex-col justify-center items-center">
          <Image
            src="/images/cardicon2.png"
            alt="cardicon2"
            height={60}
            width={60}
          />
          <h2 className="text-[#151875] font-[josefin Sans] font-extrabold">
            24/7 Support
          </h2>
          <p className="text-gray-400 text-[12px] font-bold p-7">
            Lorem ipsum dolor sit inhggdolor consectetur adipisicingsssefew
            elitex adipisicing elitex maiores beatae.
          </p>
        </div>

        {/* --------------Card 3----------------- */}
        <div className="bg-white shadow-lg max-w-sm mx-2 h-64 md:w-48 flex flex-col justify-center items-center">
          <Image
            src="/images/cardicon3.png"
            alt="cardicon3"
            height={60}
            width={60}
          />
          <h2 className="text-[#151875] font-[josefin Sans] font-extrabold">
            24/7 Support
          </h2>
          <p className="text-gray-400 text-[12px] font-bold p-7">
            Lorem ipsum dolor sit inhggdolor consectetur adipisicingsssefew
            elitex adipisicing elitex maiores beatae.
          </p>
        </div>

        {/* --------------Card 4----------------- */}
        <div className="bg-white shadow-lg max-w-sm mx-2 h-64 md:w-48 flex flex-col justify-center items-center">
          <Image
            src="/images/cardicon4.png"
            alt="cardicon4"
            height={60}
            width={60}
          />
          <h2 className="text-[#151875] font-[josefin Sans] font-extrabold">
            24/7 Support
          </h2>
          <p className="text-gray-400 text-[12px] font-bold p-7">
            Lorem ipsum dolor sit inhggdolor consectetur adipisicingsssefew
            elitex adipisicing elitex maiores beatae.
          </p>
        </div>
      </div>

      {/* ----------------Div 4---------------- */}
      <div className="bg-[#EEEFFB] w-full h-96 flex flex-col justify-center items-center my-10 pt-7 pl-4 md:pl-24">
        <h2 className="font-[josefin Sans] font-extrabold tracking-widest pb-3 text-3xl pt-5">
          Our Client Say!
        </h2>

        {/* ----------------Images---------------- */}
        <div className="flex gap-5 ">
          <Image
            src="/images/aboutpage2.png"
            alt="client"
            height={60}
            width={60}
          />
          <Image
            src="/images/aboutpage2.png"
            alt="client"
            height={60}
            width={60}
          />
          <Image
            src="/images/aboutpage2.png"
            alt="client"
            height={60}
            width={60}
          />
        </div>
        <h2 className="font-semibold">Selina Gomez</h2>
        <p className="text-center text-gray-400 text-[12px] ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Porro
          repudiandae deserunt eveniet etmagni, cumque culpa aspernatur?
          <br />
          cumque culpa aspernatur? Consequuntur
        </p>
        <p className="text-pink-600 font-extrabold">-----</p>
      </div>
    </div>
  );
}

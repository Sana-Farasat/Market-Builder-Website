import React from "react";
import Image from "next/image";
import { FaClipboardCheck } from "react-icons/fa";

export default function Hero() {
  return (
    <div>
      {/* --------------Section 1----------------- */}
      <div className="bg-[#F2F0FF] h-auto md:h-96 flex flex-col md:flex-row">
        <div className="ml-16">
          <Image
            src="/images/bulb.png"
            alt="image1"
            height={220}
            width={220}
            className="layout-responsive"
          />
        </div>
        <div className="mt-10 md:mt-16 lg:mt-28 ml-4">
          <p className="text-[#FB2E86] mb-3">Best Furniture For Your Castle</p>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 tracking-widest font-[josefin Sans]">
            New Furniture Collection <br /> Trends in 2020
          </p>
          <p className="mb-3 text-gray-400 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic est
            sit, magni{" "}
          </p>
          <button className="bg-[#FB2E86] text-white px-6 py-3 mb-3">
            Shop Now
          </button>
        </div>
        <div className="mb-3 md:mb-0 md:mt-10 md:flex md:justify-center md:items-center lg:mt-6 mx-auto md:ml-12">
          <Image
            src="/images/sofa.png"
            alt="image2"
            height={350}
            width={350}
            className="layout-responsive"
          />
        </div>
      </div>
      {/* --------------Section 2----------------- */}
      <div>
        <h2 className="text-2xl font-extrabold text-center my-7 font-[josefin Sans] tracking-widest">
          Featured Products
        </h2>
      </div>

      <div className="flex flex-col space-y-40 justify-center items-center md:flex-row md:gap-2 md:mx-2 lg:justify-around md:space-y-0">
        {/* ------------Card 1----------------*/}
        <div className=" w-60 h-52">
          <div className="bg-gray-50 ">
            <Image
              src="/images/image1.png"
              alt="image1"
              height={500}
              width={500}
            />
          </div>
          <div className="bg-white shadow-lg py-2">
            <h2 className="text-[#FB2E86] text-center font-semibold text-xl ">
              Cartiliver Chair
            </h2>
            <h2 className="text-yellow-300 font-extrabold text-center">
              - - -
            </h2>
            <h2 className="text-blue-800 text-center font-extrabold">
              Code - Y523201
            </h2>
            <h2 className="text-blue-800 text-center font-extrabold">$42.00</h2>
          </div>
        </div>

        {/* ------------Card 2----------------*/}
        <div className=" w-60 h-52">
          <div className="bg-gray-50">
            <Image
              src="/images/image2.png"
              alt="image2"
              height={300}
              width={300}
            />
          </div>
          <div className="bg-white shadow-lg py-2">
            <h2 className="text-[#FB2E86] text-center font-semibold text-xl ">
              Cartiliver Chair
            </h2>
            <h2 className="text-yellow-300 font-extrabold text-center">
              - - -
            </h2>
            <h2 className="text-blue-800 text-center font-extrabold">
              Code - Y523201
            </h2>
            <h2 className="text-blue-800 text-center font-extrabold">$42.00</h2>
          </div>
        </div>

        {/* ------------Card 3----------------*/}
        <div className=" w-60 h-52">
          <div className="bg-gray-50 ">
            <Image
              src="/images/image 3.png"
              alt="image3"
              height={400}
              width={400}
            />
            <div className="flex justify-center">
              <button className="bg-[#08D15F] text-white py-1 px-1 ml-10 mb-1">
                View Details
              </button>
            </div>
          </div>
          <div className="bg-[#2F1AC4] py-2">
            <h2 className="text-white text-center font-semibold text-xl ">
              Cartiliver Chair
            </h2>
            <h2 className="text-yellow-300 font-extrabold text-center">
              - - -
            </h2>
            <h2 className="text-slate-100 text-center font-extrabold">
              Code - Y523201
            </h2>
            <h2 className="text-slate-100 text-center font-extrabold">
              $42.00
            </h2>
          </div>
        </div>

        {/* ------------Card 4----------------*/}
        <div className=" w-60 h-52">
          <div className="bg-gray-50">
            <Image
              src="/images/image4.png"
              alt="image4"
              height={350}
              width={350}
            />
          </div>
          <div className="bg-white shadow-lg py-2">
            <h2 className="text-[#FB2E86] text-center font-semibold text-xl ">
              Cartiliver Chair
            </h2>
            <h2 className="text-yellow-300 font-extrabold text-center">
              - - -
            </h2>
            <h2 className="text-blue-800 text-center font-extrabold">
              Code - Y523201
            </h2>
            <h2 className="text-blue-800 text-center font-extrabold">$42.00</h2>
          </div>
        </div>
      </div>
      <br />
      <br />
      <p className="text-center text-3xl font-extrabold text-[#FB2E86] mt-32">
        -----
      </p>

      {/* --------------Section 3----------------- */}
      <div>
        <h2 className="text-2xl font-extrabold text-center my-7 font-[josefin Sans] tracking-widest">
          Latest Products
        </h2>
      </div>
      {/* --------------Nav Links----------------- */}
      <div>
        <ul className="flex justify-center gap-4 px-1 md:px-0 md:gap-8">
          <li className="text-[#FB2E86] underline">New Arrival</li>
          <li>Best Seller</li>
          <li>Featured</li>
          <li>Special Offer</li>
        </ul>
      </div>

      {/* --------------Frame 1----------------- */}
      <div className="flex flex-col md:flex-row space-y-1 md:gap-20 my-2 md:my-7 mx-auto md:mx-28">
        {/* --------------Card 1----------------- */}
        <div className="h-[306px] w-[320px] layout-responsive mx-auto">
          <div className="bg-[#F7F7F7] flex justify-center ">
            <Image
              src="/images/framepic1.png"
              alt="framepic1"
              height={200}
              width={200}
            />
          </div>
          <div className="flex justify-between py-1">
            <p className="text-[#151875] font-[josefin Sans] font-extrabold">
              Comfort Handy Craft
            </p>
            <p className="text-[#FB2E86] font-extrabold">$42.00</p>
          </div>
        </div>

        {/* --------------Card 2----------------- */}
        <div className="h-[306px] w-[320px] layout-responsive mx-auto">
          <div className="bg-slate-50 flex justify-center ">
            <Image
              src="/images/framepic2.png"
              alt="framepic2"
              height={200}
              width={200}
            />
          </div>
          <div className="flex justify-between py-1">
            <p className="text-[#151875] font-[josefin Sans] font-extrabold">
              Comfort Handy Craft
            </p>
            <p className="text-[#FB2E86] font-extrabold">$42.00</p>
          </div>
        </div>

        {/* --------------Card 3----------------- */}
        <div className="h-[306px] w-[320px] layout-responsive mx-auto">
          <div className="bg-[#F7F7F7] flex justify-center ">
            <Image
              src="/images/framepic3.png"
              alt="framepic3"
              height={270}
              width={270}
            />
          </div>
          <div className="flex justify-between py-1">
            <p className="text-[#151875] font-[josefin Sans] font-extrabold">
              Comfort Handy Craft
            </p>
            <p className="text-[#FB2E86] font-extrabold">$42.00</p>
          </div>
        </div>
      </div>

      {/* --------------Frame 2----------------- */}
      <div className="flex flex-col md:flex-row space-y-1 md:gap-20 my-2 md:my-7 mx-auto md:mx-28">
        {/* --------------Card 1----------------- */}
        <div className="h-[306px] w-[320px] layout-responsive mx-auto">
          <div className="bg-[#F7F7F7] flex justify-center ">
            <Image
              src="/images/framepic4.png"
              alt="framepic4"
              height={200}
              width={200}
            />
          </div>
          <div className="flex justify-between py-1">
            <p className="text-[#151875] font-[josefin Sans] font-extrabold">
              Comfort Handy Craft
            </p>
            <p className="text-[#FB2E86] font-extrabold">$42.00</p>
          </div>
        </div>

        {/* --------------Card 2----------------- */}
        <div className="h-[306px] w-[320px] layout-responsive mx-auto">
          <div className="bg-slate-50 flex justify-center ">
            <Image
              src="/images/framepic5.png"
              alt="framepic5"
              height={200}
              width={200}
            />
          </div>
          <div className="flex justify-between py-1">
            <p className="text-[#151875] font-[josefin Sans] font-extrabold">
              Comfort Handy Craft
            </p>
            <p className="text-[#FB2E86] font-extrabold">$42.00</p>
          </div>
        </div>

        {/* --------------Card 3----------------- */}
        <div className="h-[306px] w-[320px] layout-responsive mx-auto">
          <div className="bg-[#F7F7F7] flex justify-center ">
            <Image
              src="/images/framepic1.png"
              alt="framepic6"
              height={200}
              width={200}
            />
          </div>
          <div className="flex justify-between py-1">
            <p className="text-[#151875] font-[josefin Sans] font-extrabold">
              Comfort Handy Craft
            </p>
            <p className="text-[#FB2E86] font-extrabold">$42.00</p>
          </div>
        </div>
      </div>

      {/* --------------Section 4----------------- */}

      <div>
        <h2 className="text-[#151875] text-2xl font-extrabold text-center my-7 font-[josefin Sans] tracking-widest">
          What Shopex Offers!
        </h2>
      </div>
      {/* --------------Main Div----------------- */}
      <div className=" w-auto flex flex-col justify-center items-center space-y-7 md:px-2 md:flex-row md:gap-3 lg:justify-evenly">
        {/* --------------Card 1----------------- */}
        <div className="bg-white shadow-lg max-w-sm mx-2 h-64 md:w-48 flex flex-col justify-center items-center md:mt-6">
          <Image
            src="/images/cardicon1.png"
            alt="cardicon1"
            height={60}
            width={60}
          />
          <h2 className="text-[#151875] font-[josefin Sans] font-extrabold">
            24/7 Support
          </h2>
          <p className="txt-gray-200 text-[12px] font-bold p-7">
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
          <p className="txt-gray-200 text-[12px] font-bold p-7">
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
          <p className="txt-gray-200 text-[12px] font-bold p-7">
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
          <p className="txt-gray-200 text-[12px] font-bold p-7">
            Lorem ipsum dolor sit inhggdolor consectetur adipisicingsssefew
            elitex adipisicing elitex maiores beatae.
          </p>
        </div>
      </div>

      {/* --------------Section 5----------------- */}

      <div className="bg-[#F1F0FF] opacity-[100%] h-auto lg:h-96 my-20 flex flex-col md:flex-row items-center gap-20 px-3 xl:px-48">
        {/* --------------Div 1----------------- */}
        <div>
          <Image
            src="/images/sofa2.png"
            alt="sofa"
            height={350}
            width={350}
            className="layout-responsive"
          />
        </div>

        {/* --------------Div 2----------------- */}
        <div>
          <h2 className="text-xl md:2xl lg:text-3xl text-[#151875] font-bold mb-3 tracking-widest font-[josefin Sans]">
            Unique Features Of Latest & <br />
            Trending Products
          </h2>
          <ul className="list-disc pl-5 text-gray-500 mb-2">
            <li>All frames constructed with hardwood solids and laminates </li>
            <li>Reinforces with double wood dowels , screw and glue</li>
            <li>Arms , back and seats are structurally reinforced</li>
          </ul>
          <div className="flex">
            <button className="bg-[#FB2E86] text-white font-semibold px-8 py-3 my-3">
              Add to Cart
            </button>
            <p className="my-4 mx-4 font-extrabold">
              B&B Italian Sofa <br />
              $32.00
            </p>
          </div>
        </div>
      </div>

      {/* --------------Section 6----------------- */}
      <div>
        <h2 className="text-2xl text-[#151875] font-extrabold text-center my-7 font-[josefin Sans] tracking-widest">
          Trending Products
        </h2>
      </div>
      {/* --------------Frame 1----------------- */}
      <div className="flex flex-col justify-center items-center md:flex-row md:mx-16 xl:mx-[14em] space-y-5 md:gap-4 lg:gap-7 xl:gap-14">
        {/* --------------Card 1----------------- */}
        <div className=" bg-white shadow-lg w-48 h-52">
          <div className="w-40 h-36 px-2 py-1 mx-2 bg-gray-200 opacity-[100%] ">
            <Image
              src="/images/product1.png"
              alt="product1"
              height={250}
              width={250}
            />
          </div>
          <h2 className="text-[#151875] font-extrabold pt-2 px-2">
            Cartiliver Chair
          </h2>
          <p className="text-[#151875] pb-2 px-4">$26.00</p>
        </div>

        {/* --------------Card 2----------------- */}
        <div className=" bg-white shadow-lg w-48 h-52">
          <div className="w-40 h-36 px-2 py-1 mx-2 bg-gray-200 opacity-[100%] ">
            <Image
              src="/images/product2.png"
              alt="product2"
              height={300}
              width={300}
            />
          </div>
          <h2 className="text-[#151875] font-extrabold pt-2 px-2">
            Cartiliver Chair
          </h2>
          <p className="text-[#151875] pb-2 px-4">$26.00</p>
        </div>

        {/* --------------Card 3----------------- */}
        <div className=" bg-white shadow-lg w-48 h-52">
          <div className="w-40 h-36 px-2 py-1 mx-2 bg-gray-200 opacity-[100%] ">
            <Image
              src="/images/product3.png"
              alt="product3"
              height={300}
              width={300}
            />
          </div>
          <h2 className="text-[#151875] font-extrabold pt-2 px-2">
            Cartiliver Chair
          </h2>
          <p className="text-[#151875] pb-2 px-4">$26.00</p>
        </div>

        {/* --------------Card 4----------------- */}
        <div className=" bg-white shadow-lg w-48 h-52">
          <div className="w-40 h-36 px-2 py-2 mx-2 bg-gray-200 opacity-[100%] ">
            <Image
              src="/images/product4.png"
              alt="product4"
              height={300}
              width={300}
            />
          </div>
          <h2 className="text-[#151875] font-extrabold pt-2 px-2">
            Cartiliver Chair
          </h2>
          <p className="text-[#151875] pb-2 px-4">$26.00</p>
        </div>
      </div>
      <br />
      {/* --------------Frame 2----------------- */}
      <div className="flex flex-col justify-center  items-center md:flex-row mx-1 md:mx-4 xl:mx-[14em] space-y-5 md:gap-4 lg:gap-7 xl:gap-14">
        {/* --------------Card 1----------------- */}
        <div className="bg-pink-200 h-48 w-80">
          <p className="text-[#151875] font-extrabold text-xl pt-2 pl-1">
            23% Off in all products
          </p>
          <div className="flex px-1 py-2 justify-between">
            <p className="text-pink-700 underline pl-1">Shop Now</p>
            <Image
              src="/images/product5.png"
              alt="product5"
              height={150}
              width={150}
            />
          </div>
        </div>

        {/* --------------Card 2----------------- */}
        <div className="bg-gray-200 opacity-[100%] h-48 w-80">
          <p className="text-[#151875] font-extrabold text-xl pt-2 pl-1">
            23% Off in all products
          </p>
          <p className="text-pink-700 underline pl-1">Shop Now</p>
          <div className="flex justify-end items-center">
            <Image
              src="/images/product6.png"
              alt="product6"
              height={200}
              width={200}
            />
          </div>
        </div>

        {/* --------------Card 3----------------- */}
        <div className="bg-white shadow-lg w-60 h-72 flex flex-col">
          {/* --------------Div 1----------------- */}
          <div>
            <div className="flex p-1">
              <div className="bg-gray-200 p-1">
                <Image
                  src="/images/product1.png"
                  alt="product1"
                  height={100}
                  width={100}
                />
              </div>
              <div className="bg-white shadow-lg">
                <p className="text-[#151875] p-2 font-semibold">
                  Executive Seat Chair <br />
                  $38.00
                </p>
              </div>
            </div>
          </div>

          {/* --------------Card 3----------------- */}

          {/* --------------Div 2----------------- */}
          <div>
            <div className="flex p-1">
              <div className="bg-gray-200 p-1">
                <Image
                  src="/images/product2.png"
                  alt="product2"
                  height={100}
                  width={100}
                />
              </div>
              <div className="bg-white shadow-lg">
                <p className="text-[#151875] p-2 font-semibold">
                  Executive Seat Chair <br />
                  $38.00
                </p>
              </div>
            </div>
          </div>

          {/* --------------Card 3----------------- */}
          {/* --------------Div 3----------------- */}
          <div>
            <div className="flex p-1">
              <div className="bg-gray-200 p-1">
                <Image
                  src="/images/product3.png"
                  alt="product3"
                  height={100}
                  width={100}
                />
              </div>
              <div className="bg-white shadow-lg">
                <p className="text-[#151875] p-2 font-semibold">
                  Executive Seat Chair <br />
                  $38.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------Section 6----------------- */}
      <div>
        <h2 className="text-2xl text-[#151875] font-extrabold text-center my-7 font-[josefin Sans] tracking-widest">
          Discount Item
        </h2>
      </div>

      {/* --------------Nav Links----------------- */}
      <div>
        <ul className="flex justify-center gap-4 mx-2 md:gap-8">
          <li className="text-[#FB2E86] underline">Wood Chair</li>
          <li>Plastic Chair</li>
          <li>Sofa Collection</li>
        </ul>
      </div>
      {/* --------------Main Div----------------- */}
      <div className="flex flex-col md:flex-row gap-5 mx-2 md:mx-20 mb-2 bg-white shadow-lg">
        {/* --------------Heading Div----------------- */}
        <div>
          <h2 className="text-[#151875] font-extrabold text-3xl py-2 ml-10 mt-14">
            20% Discount Of All Products
          </h2>
          <p className="text-[#FB2E86] py-2 ml-10">Eams Sofa Compact</p>
          <p className="py-2 text-gray-400 ml-10">
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> Iure
            voluptates odit quidem dolor quisquam non{" "}
          </p>
          {/* --------------CheckIcon Div----------------- */}
          <div className="flex gap-4 py-3 text-gray-400 ml-10">
            <div className="flex">
              <FaClipboardCheck /> Lorem ipsum dolor sit amet consectetur
            </div>
            <div className="flex">
              <FaClipboardCheck /> Lorem ipsum dolor sit amet consectetur
            </div>
          </div>
          {/* --------------Button Div----------------- */}
          <button className="bg-[#FB2E86] text-white py-3 px-6 ml-10 md:my-4">
            Shop Now
          </button>
        </div>
        {/* --------------Image Div----------------- */}
        <div className="mx-auto md:mx-0">
          <Image src="/images/sofa3.png" alt="sofa" height={500} width={500} />
        </div>
      </div>

      {/* --------------Section 7----------------- */}
      <div>
        <h2 className="text-2xl text-[#151875] font-extrabold text-center my-7 font-[josefin Sans] tracking-widest">
          Top Categories
        </h2>
      </div>
      {/* --------------Circle Div----------------- */}
      <div
        className="flex flex-col justify-center items-center space-y-16 md:flex-row md:gap-2 
xl:gap-10 md:mx-auto xl:mx-44 my-6"
      >
        {/* --------------Circle 1----------------- */}
        <div className="rounded-full h-52 w-52 bg-gray-200 mt-auto md:mt-16">
          {/* --------------Circle Image 1----------------- */}
          <div className="flex justify-center py-8">
            <Image
              src="/images/product1.png"
              alt="product1"
              height={150}
              width={150}
            />
          </div>
          {/* --------------Circle Text 1----------------- */}
          <h2 className="text-[#151875] font-bold mx-10 md:mx-4 xl:mx-10">
            Mini LCW Chair <br />
            $56.00
          </h2>
        </div>

        {/* --------------Circle 2----------------- */}
        <div className="rounded-full h-52 w-52 bg-gray-200 ">
          {/* --------------Circle Image 2----------------- */}
          <div className="flex justify-center py-8">
            <Image
              src="/images/product2.png"
              alt="product2"
              height={150}
              width={150}
            />
          </div>
          {/* --------------Circle Text 2----------------- */}
          <h2 className="text-[#151875] font-bold mx-10 md:mx-4 xl:mx-10">
            Mini LCW Chair <br />
            $56.00
          </h2>
        </div>

        {/* --------------Circle 3----------------- */}
        <div className="rounded-full h-52 w-52 bg-gray-200 ">
          {/* --------------Circle Image 3----------------- */}
          <div className="flex justify-center py-8">
            <Image
              src="/images/product3.png"
              alt="product3"
              height={150}
              width={150}
            />
          </div>
          {/* --------------Circle Text 3----------------- */}
          <h2 className="text-[#151875] font-bold mx-10 md:mx-4 xl:mx-10">
            Mini LCW Chair <br />
            $56.00
          </h2>
        </div>

        {/* --------------Circle 4----------------- */}
        <div className="rounded-full h-52 w-52 bg-gray-200 ">
          {/* --------------Circle Image 4----------------- */}
          <div className="flex justify-center py-8">
            <Image
              src="/images/product1.png"
              alt="product1"
              height={150}
              width={150}
            />
          </div>
          {/* --------------Circle Text 4----------------- */}
          <h2 className="text-[#151875] font-bold mx-10 md:mx-4 xl:mx-10">
            Mini LCW Chair <br />
            $56.00
          </h2>
        </div>
      </div>

      {/* --------------Section 8----------------- */}
      <div className='bg-[url("/images/rectangle.png")] h-52 md:h-80 w-full bg-cover my-16 layout-responsive'>
        <div className="px-12 pt-12 md:px-36 xl:px-96 md:pt-28">
          <h2 className="text-[#151875] font-semibold  text-center text-xl md:text-2xl lg:text-3xl tracking-wide">
            Get Latest Update By Subscribe
          </h2>
          <h2 className="text-[#151875] font-semibold  text-center text-xl md:text-2xl lg:text-3xl tracking-wide md:pl-28">
            Our Newsletter
          </h2>
          <button className="bg-[#FB2E86] text-white flex justify-center items-center py-3 px-6 my-4 md:my-6 mx-auto 2xl:ml-36">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

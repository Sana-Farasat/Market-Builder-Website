import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { LuZoomIn } from "react-icons/lu";
export default function Shop() {
  return (
    <div>
      {/* ----------------Div 1---------------- */}
      <div className="bg-[#EEEFFB] w-full h-48 pt-7 pl-4 md:pl-24">
        <h2 className="font-[josefin Sans] font-extrabold tracking-widest pb-3 text-3xl pt-5">
          Shop List
        </h2>
        <p className="font-semibold">
          Home . Pages .{" "}
          <span className="font-semibold text-pink-600">Shop List</span>
        </p>
      </div>

      {/* ----------------Div 2---------------- */}
      <div className="flex flex-col justify-center w-full h-auto my-8 md:justify-between md:items-center md:mx-auto md:my-16 xl:flex-row">
        {/* ----------------Left Side---------------- */}
        <div className="my-4 text-center px-2">
          <div className="text-[#151875] xl font-extrabold  font-[josefin Sans] tracking-widest md:text-2xl ">
            Ecommerce Accessories & Fashion Items
          </div>
          <div className="text-gray-400 text-[16px]">
            About 9,620 results(0.62 seconds)
          </div>
        </div>
        {/* ----------------Right Side---------------- */}
        <div className="text-gray-500 px-2 h-auto flex flex-col justify-center items-center text-base md:flex-row md:gap-4 ">
          {/* ----------------Part 1---------------- */}
          <div className="flex ">
            <div>Per Page:</div>
            <input type="text" className="w-20 h-5 border border-gray-500" />
          </div>
          {/* ----------------Part 2---------------- */}
          <div className="flex">
            <div>Sort By:</div>
            <select name="shop" id="list">
              <option value="shop">Best Match</option>
            </select>
          </div>

          {/* ----------------Part 3---------------- */}
          <div className="flex">
            <div>View:</div>
            <input type="text" className="w-20 h-5 border border-gray-500" />
          </div>
        </div>
      </div>

      {/* ----------------Div 2---------------- */}

      {/* ----------------Main Div---------------- */}
      <div>
        {/* ----------------Card 1---------------- */}
        <div className="bg-white shadow-lg px-6 md:px-12 lg:px-20 xl:px-28 py-4 mx-4 md:mx-20 lg:mx-28 xl:mx-36 my-4 flex flex-col md:flex-row justify-center items-center ">
          {/* ----------------Card Left---------------- */}
          <div className="w-full h-auto layout-responsive">
            <Image
              src="/images/shop1.png"
              alt="shop-card"
              height={200}
              width={300}
            />
          </div>
          {/* ----------------Card Right---------------- */}
          <div className="mt-4 md:mt-0 md:ml-4">
            <h2 className="flex gap-1 text-[#151875] text-xl font-extrabold  font-[josefin Sans] tracking-widest lg:text-2xl">
              Accumsun tincidunt
              <FaCircle className="text-orange-600" />
              <FaCircle className="text-pink-600" />
              <FaCircle className="text-blue-600" />
            </h2>

            <h2 className="flex gap-1 text-xl">
              $26.00 <span className="text-pink-600 line-through">$52.00</span>{" "}
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
            </h2>
            <br />
            <h2 className="text-gray-400 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              veritatis magnam ab saepe temporibus, culpa, iusto voluptatum
            </h2>
            <br />
            <h2 className="flex gap-5 text-xl">
              <FaCartShopping />
              <CiHeart />
              <LuZoomIn />
            </h2>
          </div>
        </div>
        {/* ----------------Card 2---------------- */}
        <div className="bg-white shadow-lg px-6 md:px-12 lg:px-20 xl:px-28 py-4 mx-4 md:mx-20 lg:mx-28 xl:mx-36 my-4 flex flex-col md:flex-row justify-center items-center">
          {/* ----------------Card Left---------------- */}
          <div className="w-full h-auto layout-responsive">
            <Image
              src="/images/shop2.png"
              alt="shop-card"
              height={200}
              width={300}
            />
          </div>
          {/* ----------------Card Right---------------- */}
          <div className="mt-4 md:mt-0 md:ml-4">
            <h2 className="flex gap-1 text-[#151875] text-xl font-extrabold  font-[josefin Sans] tracking-widest lg:text-2xl">
              Accumsun tincidunt
              <FaCircle className="text-orange-600" />
              <FaCircle className="text-pink-600" />
              <FaCircle className="text-blue-600" />
            </h2>

            <h2 className="flex gap-1 text-xl">
              $26.00 <span className="text-pink-600 line-through">$52.00</span>{" "}
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
            </h2>
            <br />
            <h2 className="text-gray-400 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              veritatis magnam ab saepe temporibus, culpa, iusto voluptatum
            </h2>
            <br />
            <h2 className="flex gap-5 text-xl">
              <FaCartShopping />
              <CiHeart />
              <LuZoomIn />
            </h2>
          </div>
        </div>

        {/* ----------------Card 3---------------- */}
        <div className="bg-white shadow-lg px-6 md:px-12 lg:px-20 xl:px-28 py-4 mx-4 md:mx-20 lg:mx-28 xl:mx-36 my-4 flex flex-col md:flex-row justify-center items-center">
          {/* ----------------Card Left---------------- */}
          <div className="w-full h-auto layout-responsive">
            <Image
              src="/images/shop3.png"
              alt="shop-card"
              height={200}
              width={300}
            />
          </div>
          {/* ----------------Card Right---------------- */}
          <div className="mt-4 md:mt-0 md:ml-4">
            <h2 className="flex gap-1 text-[#151875] text-xl font-extrabold  font-[josefin Sans] tracking-widest lg:text-2xl">
              Accumsun tincidunt
              <FaCircle className="text-orange-600" />
              <FaCircle className="text-pink-600" />
              <FaCircle className="text-blue-600" />
            </h2>

            <h2 className="flex gap-1 text-xl">
              $26.00 <span className="text-pink-600 line-through">$52.00</span>{" "}
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
            </h2>
            <br />
            <h2 className="text-gray-400 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              veritatis magnam ab saepe temporibus, culpa, iusto voluptatum
            </h2>
            <br />
            <h2 className="flex gap-5 text-xl">
              <FaCartShopping />
              <CiHeart />
              <LuZoomIn />
            </h2>
          </div>
        </div>
        {/* ----------------Card 4---------------- */}
        <div className="bg-white shadow-lg px-6 md:px-12 lg:px-20 xl:px-28 py-4 mx-4 md:mx-20 lg:mx-28  xl:mx-36 my-4 flex flex-col md:flex-row justify-center items-center">
          {/* ----------------Card Left---------------- */}
          <div className="w-full h-auto layout-responsive">
            <Image
              src="/images/shop4.png"
              alt="shop-card"
              height={200}
              width={300}
            />
          </div>
          {/* ----------------Card Right---------------- */}
          <div className="mt-4 md:mt-0 md:ml-4">
            <h2 className="flex gap-1 text-[#151875] text-xl font-extrabold  font-[josefin Sans] tracking-widest lg:text-2xl">
              Accumsun tincidunt
              <FaCircle className="text-orange-600" />
              <FaCircle className="text-pink-600" />
              <FaCircle className="text-blue-600" />
            </h2>

            <h2 className="flex gap-1 text-xl">
              $26.00 <span className="text-pink-600 line-through">$52.00</span>{" "}
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
            </h2>
            <br />
            <h2 className="text-gray-400 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              veritatis magnam ab saepe temporibus, culpa, iusto voluptatum
            </h2>
            <br />
            <h2 className="flex gap-5 text-xl">
              <FaCartShopping />
              <CiHeart />
              <LuZoomIn />
            </h2>
          </div>
        </div>
        {/* ----------------Card 5---------------- */}
        <div className="bg-white shadow-lg px-6 md:px-12 lg:px-20 xl:px-28 py-4 mx-4 md:mx-20 lg:mx-28  xl:mx-36 my-4 flex flex-col md:flex-row justify-center items-center">
          {/* ----------------Card Left---------------- */}
          <div className="w-full h-auto layout-responsive">
            <Image
              src="/images/shop5.png"
              alt="shop-card"
              height={200}
              width={300}
            />
          </div>
          {/* ----------------Card Right---------------- */}
          <div className="mt-4 md:mt-0 md:ml-4">
            <h2 className="flex gap-1 text-[#151875] text-xl font-extrabold  font-[josefin Sans] tracking-widest lg:text-2xl">
              Accumsun tincidunt
              <FaCircle className="text-orange-600" />
              <FaCircle className="text-pink-600" />
              <FaCircle className="text-blue-600" />
            </h2>

            <h2 className="flex gap-1 text-xl">
              $26.00 <span className="text-pink-600 line-through">$52.00</span>{" "}
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
            </h2>
            <br />
            <h2 className="text-gray-400 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              veritatis magnam ab saepe temporibus, culpa, iusto voluptatum
            </h2>
            <br />
            <h2 className="flex gap-5 text-xl">
              <FaCartShopping />
              <CiHeart />
              <LuZoomIn />
            </h2>
          </div>
        </div>
        {/* ----------------Card 6---------------- */}
        <div className="bg-white shadow-lg px-6 md:px-12 lg:px-20 xl:px-28 py-4 mx-4 md:mx-20 lg:mx-28  xl:mx-36 my-4 flex flex-col md:flex-row justify-center items-center">
          {/* ----------------Card Left---------------- */}
          <div className="w-full h-auto layout-responsive">
            <Image
              src="/images/shop6.png"
              alt="shop-card"
              height={200}
              width={300}
            />
          </div>
          {/* ----------------Card Right---------------- */}
          <div className="mt-4 md:mt-0 md:ml-4">
            <h2 className="flex gap-1 text-[#151875] text-xl font-extrabold  font-[josefin Sans] tracking-widest lg:text-2xl">
              Accumsun tincidunt
              <FaCircle className="text-orange-600" />
              <FaCircle className="text-pink-600" />
              <FaCircle className="text-blue-600" />
            </h2>

            <h2 className="flex gap-1 text-xl">
              $26.00 <span className="text-pink-600 line-through">$52.00</span>{" "}
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
            </h2>
            <br />
            <h2 className="text-gray-400 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              veritatis magnam ab saepe temporibus, culpa, iusto voluptatum
            </h2>
            <br />
            <h2 className="flex gap-5 text-xl">
              <FaCartShopping />
              <CiHeart />
              <LuZoomIn />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

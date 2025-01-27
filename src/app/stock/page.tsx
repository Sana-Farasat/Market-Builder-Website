import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";

export default function Product() {
  return (
    <div>
      {/* ----------------Div 1---------------- */}
      <div className="bg-[#EEEFFB] w-full h-48 pt-7 pl-4 md:pl-24">
        <h2 className="font-[josefin Sans] font-extrabold tracking-widest pb-3 text-3xl pt-5">
          Shop Grid Default
        </h2>
        <p className="font-semibold">
          Home . Pages .{" "}
          <span className="font-semibold text-pink-600">Shop Grid Default</span>
        </p>
      </div>

      {/* ----------------Div 2---------------- */}
      <div>
        <div className="flex flex-col justify-center w-full h-auto my-8 md:justify-between md:items-center md:mx-auto md:my-16 xl:flex-row">
          {/* ----------------Left Side---------------- */}
          <div className="my-4 text-center px-2 ">
            <div className="text-[#151875] text-xl font-extrabold  font-[josefin Sans] tracking-widest md:text-2xl">
              Ecommerce Accessories & Fashion Items
            </div>
            <div className="text-gray-400 text-[16px]">
              About 9,620 results(0.62 seconds)
            </div>
          </div>
          {/* ----------------Right Side---------------- */}
          <div className="text-gray-500 px-2 h-auto flex flex-col justify-center items-center text-base md:text-xl md:flex-row md:gap-4 ">
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
      </div>

      {/* ----------------Div 3---------------- */}
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:mx-16 md:mx-6 lg:mx-20 xl:mx-32">
        {/* ----------------Card 1---------------- */}
        <div>
          <div className="bg-[#EEEFFB] h-52 w-60 flex justify-center items-center">
            <Image
              src="/images/gridshop1.png"
              alt="product"
              height={200}
              width={180}
              className="layout-responsive "
            />
          </div>
          <div className="flex flex-col justify-center items-center h-20 w-60">
            <h2 className="text-[#151875] text-sm  font-extrabold  font-[josefin Sans] tracking-widest lg:text-base">
              vel evit elismod
              <div className="flex justify-center gap-1">
                <FaCircle className="text-orange-600" />
                <FaCircle className="text-pink-600" />
                <FaCircle className="text-blue-600" />
              </div>
              <div className="flex gap-2 text-sm md:text-base">
                $26.00{" "}
                <span className="text-pink-600 line-through">$52.00</span>
              </div>
            </h2>
          </div>
        </div>
        {/* ----------------Card 2---------------- */}
        <div>
          <div className="bg-[#EEEFFB] h-52 w-60 flex justify-center items-center">
            <Image
              src="/images/gridshop2.png"
              alt="product"
              height={200}
              width={180}
              className="layout-responsive"
            />
          </div>
          <div className="flex flex-col justify-center items-center h-20 w-60">
            <h2 className="text-[#151875] text-sm  font-extrabold  font-[josefin Sans] tracking-widest lg:text-base">
              vel evit elismod
              <div className="flex justify-center gap-1">
                <FaCircle className="text-orange-600" />
                <FaCircle className="text-pink-600" />
                <FaCircle className="text-blue-600" />
              </div>
              <div className="flex gap-2 text-sm md:text-base">
                $26.00{" "}
                <span className="text-pink-600 line-through">$52.00</span>
              </div>
            </h2>
          </div>
        </div>
        {/* ----------------Card 3---------------- */}
        <div>
          <div className="bg-[#EEEFFB] h-52 w-60 flex justify-center items-center">
            <Image
              src="/images/gridshop3.png"
              alt="product"
              height={200}
              width={180}
              className="layout-responsive "
            />
          </div>
          <div className="flex flex-col justify-center items-center h-20 w-60">
            <h2 className="text-[#151875] text-sm  font-extrabold  font-[josefin Sans] tracking-widest lg:text-base">
              vel evit elismod
              <div className="flex justify-center gap-1">
                <FaCircle className="text-orange-600" />
                <FaCircle className="text-pink-600" />
                <FaCircle className="text-blue-600" />
              </div>
              <div className="flex gap-2 text-sm md:text-base">
                $26.00{" "}
                <span className="text-pink-600 line-through">$52.00</span>
              </div>
            </h2>
          </div>
        </div>
        {/* ----------------Card 4---------------- */}
        <div>
          <div className="bg-[#EEEFFB] h-52 w-60 flex justify-center items-center">
            <Image
              src="/images/gridshop4.png"
              alt="product"
              height={200}
              width={180}
              className="layout-responsive "
            />
          </div>
          <div className="flex flex-col justify-center items-center h-20 w-60">
            <h2 className="text-[#151875] text-sm  font-extrabold  font-[josefin Sans] tracking-widest lg:text-base">
              vel evit elismod
              <div className="flex justify-center gap-1">
                <FaCircle className="text-orange-600" />
                <FaCircle className="text-pink-600" />
                <FaCircle className="text-blue-600" />
              </div>
              <div className="flex gap-2 text-sm md:text-base">
                $26.00{" "}
                <span className="text-pink-600 line-through">$52.00</span>
              </div>
            </h2>
          </div>
        </div>
        {/* ----------------Card 5---------------- */}
        <div>
          <div className="bg-[#EEEFFB] h-52 w-60 flex justify-center items-center">
            <Image
              src="/images/gridshop5.png"
              alt="product"
              height={140}
              width={140}
              className="layout-responsive "
            />
          </div>
          <div className="flex flex-col justify-center items-center h-20 w-60">
            <h2 className="text-[#151875] text-sm  font-extrabold  font-[josefin Sans] tracking-widest lg:text-base">
              vel evit elismod
              <div className="flex justify-center gap-1">
                <FaCircle className="text-orange-600" />
                <FaCircle className="text-pink-600" />
                <FaCircle className="text-blue-600" />
              </div>
              <div className="flex gap-2 text-sm md:text-base">
                $26.00{" "}
                <span className="text-pink-600 line-through">$52.00</span>
              </div>
            </h2>
          </div>
        </div>
        {/* ----------------Card 6---------------- */}
        <div>
          <div className="bg-[#EEEFFB] h-52 w-60 flex justify-center items-center">
            <Image
              src="/images/gridshop6.png"
              alt="product"
              height={200}
              width={180}
              className="layout-responsive"
            />
          </div>
          <div className="flex flex-col justify-center items-center h-20 w-60">
            <h2 className="text-[#151875] text-sm  font-extrabold  font-[josefin Sans] tracking-widest lg:text-base">
              vel evit elismod
              <div className="flex justify-center gap-1">
                <FaCircle className="text-orange-600" />
                <FaCircle className="text-pink-600" />
                <FaCircle className="text-blue-600" />
              </div>
              <div className="flex gap-2 text-sm md:text-base">
                $26.00{" "}
                <span className="text-pink-600 line-through">$52.00</span>
              </div>
            </h2>
          </div>
        </div>
        {/* ----------------Card 7---------------- */}
        <div>
          <div className="bg-[#EEEFFB] h-52 w-60 flex justify-center items-center">
            <Image
              src="/images/gridshop7.png"
              alt="product"
              height={140}
              width={140}
              className="layout-responsive "
            />
          </div>
          <div className="flex flex-col justify-center items-center h-20 w-60">
            <h2 className="text-[#151875] text-sm  font-extrabold  font-[josefin Sans] tracking-widest lg:text-base">
              vel evit elismod
              <div className="flex justify-center gap-1">
                <FaCircle className="text-orange-600" />
                <FaCircle className="text-pink-600" />
                <FaCircle className="text-blue-600" />
              </div>
              <div className="flex gap-2 text-sm md:text-base">
                $26.00{" "}
                <span className="text-pink-600 line-through">$52.00</span>
              </div>
            </h2>
          </div>
        </div>
        {/* ----------------Card 8---------------- */}
        <div>
          <div className="bg-[#EEEFFB] h-52 w-60 flex justify-center items-center">
            <Image
              src="/images/gridshop8.png"
              alt="product"
              height={200}
              width={180}
              className="layout-responsive"
            />
          </div>
          <div className="flex flex-col justify-center items-center h-20 w-60">
            <h2 className="text-[#151875] text-sm  font-extrabold  font-[josefin Sans] tracking-widest lg:text-base">
              vel evit elismod
              <div className="flex justify-center gap-1">
                <FaCircle className="text-orange-600" />
                <FaCircle className="text-pink-600" />
                <FaCircle className="text-blue-600" />
              </div>
              <div className="flex gap-2 text-sm md:text-base">
                $26.00{" "}
                <span className="text-pink-600 line-through">$52.00</span>
              </div>
            </h2>
          </div>
        </div>
        {/* ----------------Card 9---------------- */}
        <div>
          <div className="bg-[#EEEFFB] h-52 w-60 flex justify-center items-center">
            <Image
              src="/images/gridshop9.png"
              alt="product"
              height={200}
              width={180}
              className="layout-responsive "
            />
          </div>
          <div className="flex flex-col justify-center items-center h-20 w-60">
            <h2 className="text-[#151875] text-sm  font-extrabold  font-[josefin Sans] tracking-widest lg:text-base">
              vel evit elismod
              <div className="flex justify-center gap-1">
                <FaCircle className="text-orange-600" />
                <FaCircle className="text-pink-600" />
                <FaCircle className="text-blue-600" />
              </div>
              <div className="flex gap-2 text-sm md:text-base">
                $26.00{" "}
                <span className="text-pink-600 line-through">$52.00</span>
              </div>
            </h2>
          </div>
        </div>
        {/* ----------------Card 10---------------- */}
        <div>
          <div className="bg-[#EEEFFB] h-52 w-60 flex justify-center items-center">
            <Image
              src="/images/gridshop10.png"
              alt="product"
              height={200}
              width={180}
              className="layout-responsive "
            />
          </div>
          <div className="flex flex-col justify-center items-center h-20 w-60">
            <h2 className="text-[#151875] text-sm  font-extrabold  font-[josefin Sans] tracking-widest lg:text-base">
              vel evit elismod
              <div className="flex justify-center gap-1">
                <FaCircle className="text-orange-600" />
                <FaCircle className="text-pink-600" />
                <FaCircle className="text-blue-600" />
              </div>
              <div className="flex gap-2 text-sm md:text-base">
                $26.00{" "}
                <span className="text-pink-600 line-through">$52.00</span>
              </div>
            </h2>
          </div>
        </div>
        {/* ----------------Card 11---------------- */}
        <div>
          <div className="bg-[#EEEFFB] h-52 w-60 flex justify-center items-center">
            <Image
              src="/images/gridshop11.png"
              alt="product"
              height={200}
              width={180}
              className="layout-responsive "
            />
          </div>
          <div className="flex flex-col justify-center items-center h-20 w-60">
            <h2 className="text-[#151875] text-sm  font-extrabold  font-[josefin Sans] tracking-widest lg:text-base">
              vel evit elismod
              <div className="flex justify-center gap-1">
                <FaCircle className="text-orange-600" />
                <FaCircle className="text-pink-600" />
                <FaCircle className="text-blue-600" />
              </div>
              <div className="flex gap-2 text-sm md:text-base">
                $26.00{" "}
                <span className="text-pink-600 line-through">$52.00</span>
              </div>
            </h2>
          </div>
        </div>
        {/* ----------------Card 12---------------- */}
        <div>
          <div className="bg-[#EEEFFB] h-52 w-60 flex justify-center items-center">
            <Image
              src="/images/gridshop12.png"
              alt="product"
              height={200}
              width={180}
              className="layout-responsive "
            />
          </div>
          <div className="flex flex-col justify-center items-center h-20 w-60">
            <h2 className="text-[#151875] text-sm  font-extrabold  font-[josefin Sans] tracking-widest lg:text-base">
              vel evit elismod
              <div className="flex justify-center gap-1">
                <FaCircle className="text-orange-600" />
                <FaCircle className="text-pink-600" />
                <FaCircle className="text-blue-600" />
              </div>
              <div className="flex gap-2 text-sm md:text-base">
                $26.00{" "}
                <span className="text-pink-600 line-through">$52.00</span>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

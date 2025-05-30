"use client";

import React, { useContext } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify, ChevronUp } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  //DropdownMenuLabel,
  //DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Cart from "./Cart";
import { CartContext } from "@/app/context/CartContext";

export default function Header() {
  const {totalQuantity, showCart, setShowCart }: any = useContext(CartContext);

 

  const handleClick = () => {
    setShowCart(!showCart); // Toggle the cart visibility
  };
  return (
    <header>
      {/*----------------Div 1------------------- */}
      <div className="flex flex-col justify-around items-center bg-violet-700 text-white h-20 px-4 lg:px-16 md:flex-row md:h-16">
        {/*----------------Div 1 Left------------------- */}
        <div className="flex space-x-6">
          {/*----------------Left side 1------------------- */}
          <div className="flex items-center text-[0.8em] lg:text-[1em]">
            <FaEnvelope />
            <p> mhhasanul@gmail.com</p>
          </div>
          {/*----------------Left side 2------------------- */}
          <div className="flex items-center text-[0.8em] lg:text-[1em]">
            <FaPhoneAlt />
            <p> (12345) 67890</p>
          </div>
        </div>
        {/*----------------Div 1 Right------------------- */}
        <div className="flex space-x-2">
          {/*----------------Right side 1------------------- */}
          <div className="text-black text-[0.8em] lg:text-[1em]">
            <select name="language">
              <option value="langlist">English</option>
              <option value="langlist">Urdu</option>
              <option value="langlist">Spanish</option>
              <option value="langlist">Turkey</option>
            </select>
          </div>
          {/*----------------Right side 2------------------- */}
          <div className="text-black text-[0.8em] lg:text-[1em]">
            <select name="currency">
              <option value="currlist">USD</option>
              <option value="currlist">UK</option>
              <option value="currlist">EURO</option>
              <option value="currlist">PKR</option>
            </select>
          </div>
          {/*----------------Right side 3------------------- */}
          <div className="flex items-center text-[0.8em] lg:text-[1em]">
            login
            <RxAvatar />
          </div>
          {/*----------------Right side 4------------------- */}
          <Link href={'/wishlist'}>
          <div className="flex items-center text-[0.8em] lg:text-[1em]">
            whishlist
            <FaRegHeart />
          </div>
          </Link>
          {/*----------------Right side 5------------------- */}
          <div className="flex items-center text-[1em] lg:text-[1.8em]">
            <button onClick={handleClick} className="relative">
              <span>
                <BsCartFill />{" "}
              </span>
              <span className="absolute top-[-5px] right-[-5px]  text-yellow-300 text-xs rounded-full  flex items-center justify-center">
                {totalQuantity}
              </span>
            </button>
          </div>
        </div>
      </div>
      {showCart && <Cart />}
      {/*----------------Div 2------------------- */}
      <div className="flex justify-between items-center h-20 px-4 md:px-8 lg:px-10 lg:justify-around lg:gap-12">
        {/*----------------Left side------------------- */}
        <div className="flex gap-16">
          {/*----------------Logo------------------- */}
          <div className="font-[josefin Sans] font-extrabold tracking-widest pb-7 text-2xl pt-5 md:text-4xl">
            Hekto
          </div>

          {/*----------------Nav Links------------------- */}
          <ul className=" flex-row gap-4 items-center hidden lg:flex">
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-center items-center text-pink-500">
                  Home <ChevronUp size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>
                    <Link href="/">Home</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/about-us">About</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/my-account">Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/faq">Faq</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li>
              <Link href="/404">Pages</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/*----------------Right side------------------- */}

        <div className="items-center font-extrabold text-2xl hidden lg:flex">
          <input type="text" className=" border border-gray-300" />
          <CiSearch />
        </div>

        {/*----------------For Responsiveness------------------- */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className="bg-white">
            <ul className="flex flex-col space-y-4 font-bold items-center">
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex justify-center items-center text-pink-500 select-none">
                    Home <ChevronUp size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-pink-300">
                    <DropdownMenuItem className="font-bold">
                      <Link href="/">Home</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="font-bold">
                      <Link href="/about-us">About</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="font-bold">
                      <Link href="/my-account">Account</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="font-bold">
                      <Link href="/faq">Faq</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li>
                <Link href="/404">Pages</Link>
              </li>
              <li>
                <Link href="/product">Product</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      {/* <div>
        <Cart />
      </div> */}
    </header>
  );
}

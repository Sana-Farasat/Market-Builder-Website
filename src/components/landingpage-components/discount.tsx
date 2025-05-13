import Image from "next/image";
import Link from "next/link";
import { FaClipboardCheck } from "react-icons/fa";

export default function DiscountProducts() {
  return (
    <main>
      {/* --------------Section 6----------------- */}

      <div className="text-center mb-10">
        <h2 className="text-[#151875] text-3xl md:text-4xl font-extrabold font-[Josefin Sans] tracking-widest">
          Discount Item
        </h2>
      </div>

      {/* --------------Nav Links----------------- */}
      <div>
        <ul className="flex justify-center gap-4 mx-2 md:gap-8 ">
          <li className="text-[#FB2E86] underline">Wood Chair</li>
          <li className="hover:text-[#FB2E86]">Plastic Chair</li>
          <li className="hover:text-[#FB2E86]">Sofa Collection</li>
        </ul>
      </div>
      <br />
      {/* --------------Main Div----------------- */}
      <div className="flex flex-col md:flex-row gap-5 mx-2 md:mx-20 mb-2 bg-[#F1F0FF] opacity-[100%] shadow-lg">
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
          <Link href={"/product"}>
            <button className="bg-[#FB2E86] hover:bg-pink-600 text-white py-3 px-6 ml-10 md:my-4">
              Shop Now
            </button>
          </Link>
        </div>
        {/* --------------Image Div----------------- */}
        <div className="mx-auto md:mx-0">
          <Image
            src="/images/sofa3.png"
            alt="sofa"
            height={500}
            width={500}
            className="transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </main>
  );
}

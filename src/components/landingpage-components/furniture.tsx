import Image from "next/image";
import Link from "next/link";

export default function Furniture() {
  return (
    <main>
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
          <Link href={"/product"}>
            <button className="bg-[#FB2E86] text-white px-6 py-3 mb-3 hover:bg-pink-600">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="mb-3 md:mb-0 md:mt-10 md:flex md:justify-center md:items-center lg:mt-6 mx-auto md:ml-12 ">
          <Image
            src="/images/sofa.png"
            alt="image2"
            height={350}
            width={350}
            className="layout-responsive "
          />
        </div>
      </div>
    </main>
  );
}

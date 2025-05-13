import "animate.css";
import Link from "next/link";

export default function Subscribe() {
  return (
    <main>
      {/* --------------Section 8----------------- */}
      <div className='bg-[url("/images/rectangle.png")] h-52 md:h-80 w-full bg-cover my-16 layout-responsive animate-pulse'>
        <div className="px-12 pt-12 md:px-36 xl:px-96 md:pt-28">
          <h2 className="text-[#151875] font-semibold  text-center text-xl md:text-2xl lg:text-3xl tracking-wide">
            Get Latest Update By Subscribe
          </h2>
          <h2 className="text-[#151875] font-semibold  text-center text-xl md:text-2xl lg:text-3xl tracking-wide md:pl-28">
            Our Newsletter
          </h2>
          <Link href={"/product"}>
            <button className="bg-[#FB2E86] hover:bg-pink-600 text-white flex justify-center items-center py-3 px-6 my-4 md:my-6 mx-auto 2xl:ml-36">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

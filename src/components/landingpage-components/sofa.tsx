import Image from "next/image";

export default function Sofa() {
  return (
    <main>
      {/* --------------Section 5----------------- */}

      <div className="bg-[#F1F0FF] opacity-[100%] h-auto lg:h-96 my-20 flex flex-col md:flex-row items-center gap-20 px-3 xl:px-48">
        {/* --------------Div 1----------------- */}
        <div>
          <Image
            src="/images/sofa2.png"
            alt="sofa"
            height={350}
            width={350}
            className="layout-responsive transition-transform duration-300 ease-in-out hover:scale-105
            "
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
            <button className="bg-[#FB2E86] hover:bg-pink-600 text-white font-semibold px-8 py-3 my-3">
              Add to Cart
            </button>
            <p className="my-4 mx-4 font-extrabold">
              B&B Italian Sofa <br />
              $32.00
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

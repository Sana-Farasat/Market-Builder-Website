"use client";

import Image from "next/image";

type CategoryItem = {
  img: string;
  name: string;
  price: string;
};

const categoriesData: CategoryItem[] = [
  { img: "product1.png", name: "Mini LCW Chair", price: "$56.00" },
  { img: "product2.png", name: "Cozy Modern Chair", price: "$69.00" },
  { img: "product3.png", name: "Wooden Arm Chair", price: "$78.00" },
  { img: "product1.png", name: "Simple Seat", price: "$52.00" },
];

export default function Categories() {
  return (
    <main className="py-10 px-4 bg-white">
      {/* Section Title */}
      <h2 className="text-3xl text-[#151875] font-extrabold text-center mb-12 font-[Josefin Sans] tracking-widest">
        Top Categories
      </h2>

      {/* Circles Grid */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 flex-wrap">
        {categoriesData.map((item, index) => (
          <div
            key={index}
            className="rounded-full h-60 w-60 bg-gray-100 shadow-xl flex flex-col items-center justify-center p-4 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            style={{ animation: "moonEffect 4s ease-in-out infinite" }}
          >
            <div className="flex justify-center">
              <Image
                src={`/images/${item.img}`}
                alt={item.name}
                width={120}
                height={120}
              />
            </div>
            <h3 className="text-center text-[#151875] font-semibold text-sm mt-3 leading-5">
              {item.name} <br />
              <span className="text-sm text-[#FB2E86]">{item.price}</span>
            </h3>
          </div>
        ))}
      </div>

      {/* Inline Moon Animation */}
      <style jsx>{`
        @keyframes moonEffect {
          0% {
            transform: rotate(-4deg) translateY(0px);
          }
          50% {
            transform: rotate(4deg) translateY(-8px);
          }
          100% {
            transform: rotate(-4deg) translateY(0px);
          }
        }
      `}</style>
    </main>
  );
}

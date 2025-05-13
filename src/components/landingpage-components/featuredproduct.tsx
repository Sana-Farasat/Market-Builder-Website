import Image from "next/image";

// Product data stored in array
const products = [
  {
    id: 1,
    title: "Cartiliver Chair",
    code: "Y523201",
    price: "$42.00",
    image: "/images/image1.png",
  },
  {
    id: 2,
    title: "Cartiliver Chair",
    code: "Y523201",
    price: "$42.00",
    image: "/images/image2.png",
  },
  {
    id: 3,
    title: "Cartiliver Chair",
    code: "Y523201",
    price: "$42.00",
    image: "/images/image 3.png",
    hasViewDetails: true, // special styling
  },
  {
    id: 4,
    title: "Cartiliver Chair",
    code: "Y523201",
    price: "$42.00",
    image: "/images/image4.png",
  },
];

export default function FeaturedProduct() {
  return (
    <main className="py-10 px-4 bg-gradient-to-br from-white to-slate-100">
     
      {/* --------------Section 2----------------- */}

      {/* Section Title */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 font-[Josefin Sans] tracking-widest text-[#2F1AC4]">
          Featured Products
        </h2>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="bg-gray-100 p-4 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.title}
                height={200}
                width={200}
                className="object-cover aspect-square h-48 w-full "
              />
            </div>

            {/* Optional Button */}
            {product.hasViewDetails && (
              <div className="flex justify-center mt-2">
                <button className="bg-[#08D15F] hover:bg-[#06b24e] text-white font-medium px-4 py-2 rounded-md transition-all focus:outline-none focus:ring-0">
                  View Details
                </button>
              </div>
            )}

            {/* Product Info */}
            <div
              className={`py-4 px-3 ${
                product.hasViewDetails
                  ? "bg-[#2F1AC4] text-white"
                  : "bg-white text-black"
              }`}
            >
              <h3
                className={`text-xl font-semibold text-center ${
                  !product.hasViewDetails ? "text-[#FB2E86]" : ""
                }`}
              >
                {product.title}
              </h3>
              <p className="text-yellow-400 font-bold text-center">- - -</p>
              <p className="text-center font-semibold">Code - {product.code}</p>
              <p className="text-center font-bold text-lg">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Line */}
      <div className="mt-20">
        <p className="text-center text-3xl font-extrabold text-[#FB2E86]">
          -----
        </p>
      </div>
    </main>
  );
}

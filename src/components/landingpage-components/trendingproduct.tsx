import Image from "next/image";

const trendingProducts = [
  {
    id: 1,
    image: "/images/product1.png",
    title: "Cartiliver Chair",
    price: "$26.00",
  },
  {
    id: 2,
    image: "/images/product2.png",
    title: "Cartiliver Chair",
    price: "$26.00",
  },
  {
    id: 3,
    image: "/images/product3.png",
    title: "Cartiliver Chair",
    price: "$26.00",
  },
  {
    id: 4,
    image: "/images/product4.png",
    title: "Cartiliver Chair",
    price: "$26.00",
  },
];

const miniCards = [
  {
    id: 1,
    image: "/images/product5.png",
    bg: "bg-pink-200",
    text: "23% Off in all products",
  },
  {
    id: 2,
    image: "/images/product6.png",
    bg: "bg-gray-200",
    text: "23% Off in all products",
  },
];

const verticalCards = [
  {
    id: 1,
    image: "/images/product1.png",
    title: "Executive Seat Chair",
    price: "$38.00",
  },
  {
    id: 2,
    image: "/images/product2.png",
    title: "Executive Seat Chair",
    price: "$38.00",
  },
  {
    id: 3,
    image: "/images/product3.png",
    title: "Executive Seat Chair",
    price: "$38.00",
  },
];

export default function TrendingProducts() {
  return (
    <section className="bg-white py-12 px-4">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10  tracking-widest text-[#151875]">
        Trending Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {trendingProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-3"
          >
            <div className="bg-gray-200 flex justify-center items-center h-36 rounded-md">
              <Image
                src={product.image}
                alt={product.title}
                height={100}
                width={100}
              />
            </div>
            <h3 className="text-[#151875] font-semibold mt-3">
              {product.title}
            </h3>
            <p className="text-[#151875] font-bold">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Banner Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14">
        {/* Offer Cards */}
        {miniCards.map((card) => (
          <div
            key={card.id}
            className={`${card.bg} rounded-xl p-4 flex justify-between items-center`}
          >
            <div>
              <p className="text-[#151875] font-extrabold text-lg">
                {card.text}
              </p>
              <p className="text-pink-700 underline cursor-pointer mt-2">
                Shop Now
              </p>
            </div>
            <Image
              src={card.image}
              alt="Offer Image"
              height={100}
              width={100}
            />
          </div>
        ))}

        {/* Vertical Card List */}
        <div className="bg-white shadow-lg rounded-xl p-4 space-y-4">
          {verticalCards.map((item) => (
            <div key={item.id} className="flex items-center space-x-3">
              <div className="bg-gray-200 p-2 rounded-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={80}
                  width={80}
                />
              </div>
              <div>
                <p className="text-[#151875] font-medium">{item.title}</p>
                <p className="font-semibold text-[#151875]">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

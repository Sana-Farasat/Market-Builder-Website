import Image from "next/image";

const latestProducts = [
  {
    id: 1,
    title: "Comfort Handy Craft",
    price: "$42.00",
    image: "/images/framepic1.png",
  },
  {
    id: 2,
    title: "Comfort Handy Craft",
    price: "$42.00",
    image: "/images/framepic2.png",
  },
  {
    id: 3,
    title: "Comfort Handy Craft",
    price: "$42.00",
    image: "/images/framepic3.png",
  },
  {
    id: 4,
    title: "Comfort Handy Craft",
    price: "$42.00",
    image: "/images/framepic4.png",
  },
  {
    id: 5,
    title: "Comfort Handy Craft",
    price: "$42.00",
    image: "/images/framepic5.png",
  },
  {
    id: 6,
    title: "Comfort Handy Craft",
    price: "$42.00",
    image: "/images/framepic1.png",
  },
];

export default function LatestProducts() {
  return (
    <section className="bg-white py-12 px-4">
      {/* Section Title */}
      <h2 className="text-[#151875] text-3xl text-center md:text-4xl font-extrabold font-[Josefin Sans] tracking-widest">
        Latest Products
      </h2>
      <br />
      {/* Navigation Tabs */}
      <div className="mb-8">
        <ul className="flex justify-center gap-6 flex-wrap text-lg">
          <li className="text-[#FB2E86] underline cursor-pointer">
            New Arrival
          </li>
          <li className="hover:text-[#FB2E86] cursor-pointer">Best Seller</li>
          <li className="hover:text-[#FB2E86] cursor-pointer">Featured</li>
          <li className="hover:text-[#FB2E86] cursor-pointer">Special Offer</li>
        </ul>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {latestProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="bg-gray-100 p-4 flex justify-center items-center h-60">
              <Image
                src={product.image}
                alt={product.title}
                height={200}
                width={200}
                className="object-cover max-h-full"
              />
            </div>
            <div className="p-4 flex justify-between items-center">
              <p className="text-[#151875] font-extrabold ">{product.title}</p>
              <p className="text-[#FB2E86] font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

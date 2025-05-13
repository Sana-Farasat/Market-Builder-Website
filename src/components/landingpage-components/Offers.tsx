import Image from "next/image";
import "animate.css";

//Type for each card
type OfferCardProps = {
  icon: string;
  title: string;
  description: string;
};

//Data array
const offersData: OfferCardProps[] = [
  {
    icon: "cardicon1.png",
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quidem iste eos natus.",
  },
  {
    icon: "cardicon2.png",
    title: "Easy Returns",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quidem iste eos natus.",
  },
  {
    icon: "cardicon3.png",
    title: "Secure Payment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quidem iste eos natus.",
  },
  {
    icon: "cardicon4.png",
    title: "Fast Delivery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quidem iste eos natus.",
  },
];

export default function ShopexOffers() {
  return (
    <main>
      {/* --------------Section 4----------------- */}

      <div className="bg-gray-50 py-10 px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-[#151875] text-3xl md:text-4xl font-extrabold font-[Josefin Sans] tracking-widest">
            What Shopex Offers!
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 animate__animated animate__fadeInUp">
          {offersData.map((offer, index) => (
            <div
              key={index}
              className="bg-white shadow-xl w-72 h-72 p-6 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={`/images/${offer.icon}`}
                alt={offer.title}
                height={60}
                width={60}
              />
              <h3 className="text-[#151875] font-[Josefin Sans] font-bold mt-4 text-lg text-center">
                {offer.title}
              </h3>
              <p className="text-gray-500 text-sm text-center mt-3">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

import Products from "@/components/chunks-components/product";
import Link from "next/link";

const Product = () => {
  return (
    <main>
      <div>
        <Products />
      </div>
      <div>
        <Link href="/stock" className="flex justify-center my-7">
          <button className="bg-[#FB2E86] text-white px-3 py-2 md:px-6 md:py-3 hover:bg-pink-600">
            {" "}
            Upcoming Stock
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Product;

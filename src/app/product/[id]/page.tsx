'use client';

// import Reviews from "@/components/chunks-components/reviews";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";

//  interface ProductData {
//   _id: string;
//   imageUrl: string;
//   name: string;
//   discountPercentage: number;
//   stockLevel: number;
//   description: string;
//   category: string;
//   price: number;
// }

// interface ProductParams {
//   params: { slug: string };
// }

// export default async function ProductDetails({ params,}: {params: Promise<{ slug: string }>;}) {
//   const { slug } = await params;

//   //const {cartItems , addProduct , qty , incQty , decQty} :any = useContext(CartContext);

// //const {cartItems}  :any = useContext(CartContext);
//  // console.log(cartItems)

//   const query = `  *[_type == 'product' && slug.current == '${slug}']{         
//     name,
//     description,
//     price,
//      "imageUrl": image.asset->url,
//     stockLevel,
//     category,
// }
// `;

//   const fetchData: ProductData[] = await client.fetch(query, {
//     slug: slug,
//   });

//   if (fetchData.length === 0) {
//     return <div>Product not found</div>;
//   }

//   //console.log(fetchData.slug)

import { CartContext } from "@/app/context/CartContext"
import WishlistIcon from "@/components/chunks-components/wishlist"
import Reviews from "@/components/chunks-components/reviews";
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles for Toastify

//-----------------------------------------------------------
// export async function getStaticPaths() {
//   // Fetch all the product IDs from your Sanity backend
//   const products = await client.fetch(`*[_type == "product"]{_id}`);
  
//   // Map the products to an array of paths for the dynamic route
//   const paths = products.map((product: { id: string }) => ({
//     params: { id: product.id }, // id will be used in the [id].tsx file
//   }));

//   return {
//     paths,
//     fallback: 'blocking',  // This will ensure pages are built on-demand and not skipped
//   };
// }


// export async function getStaticProps(){

//   const query=`
//          *[_type == 'product']{
//          _id,
//          name,
//          description,

//          }`;
//          const posts = await client.fetch(query)

//          return {
//           props: {
//             posts,
//           },
//         }
// }
//--------------------------------------------------------

//export const revalidate=10 //----> seconds

// export async function generateStaticParams(){

//       const query=`
//       *[_type == 'product']{
//       _id
//       }`;
//       const ids= await client.fetch(query);
      
//       return ids.map((_id: { id: string }) => ({ _id: _id.id }));
//     }
//----------------------------------------------------------
   
// Function to trigger toast notification
const notify = (message: string) => {
  toast(message);  // Show a toast notification with the given message
};

    export interface Products {
    _id: string
    id: string
    name: string
    stockLevel: number
    price: number
    category: string
    description: string
    discountPercentage: number
    imageUrl: string
    quantity?: number
}

export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) {

    const [item, setItem] = useState<Products[]>([]);
    const [ID, setID] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            const id = (await params).id;
            setID(id);

            const ListingData = async () => {
                const res = await client.fetch(`*[ _id == "${id}"]{_id,id,name,stockLevel,price,
                category,
                description,
                discountPercentage,
                "imageUrl": image.asset -> url
                 }`);
                return res;
            };
            const product: Products[] = await ListingData();
            setItem(product);
        };
        fetchData();
    }, [params]);

    const { cartItems, addProduct, qty, incQty, decQty }: any = useContext(CartContext);

  return (
    <div className="max-w-screen-2xl mx-auto">
      {item.map((product: Products) => {
        return (
          <div key={product._id}>
            <section className="text-gray-600 body-font overflow-hidden px-3">
              <div className="container px-3 py-16 mx-auto border  border-gray-400 bg-white rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-100 ">
                <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
                  <Image
                    alt={product.name}
                    className="h-72 w-72 sm:h-84 sm:w-84 md:w-96 md:h-96 lg:w-1/2  lg:h-auto  object-cover object-center rounded"
                    src={urlFor(product.imageUrl).url()}
                    height={"400"}
                    width={"400"}
                  />

                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      BRAND NAME
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {product.name}
                    </h1>
                    <div className="flex mb-4">
                      <span className="flex items-center">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 text-indigo-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 text-indigo-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 text-indigo-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 text-indigo-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 text-indigo-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      <span className="text-gray-600 ml-3">Reviews</span>
                      </span>
                      <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                        <Link
                          href="https://www.facebook.com/"
                          className="text-gray-500"
                        >
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                          </svg>
                         </Link>
                         <Link
                          href="https://www.instagram.com/"
                          className="text-gray-500"
                        >
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                         </Link>
                         <Link href="/" className="text-gray-500">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                          </svg>
                        </Link>
                      </span>
                    </div>
                    <p className="leading-relaxed">{product.description}</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                      <div className="flex">
                        <span className="mr-3">Color</span>
                        <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                        <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                        <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
                      </div>
                      <div className="flex ml-6 items-center">
                        <span className="mr-3">Size</span>
                        <div className="relative">
                          <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                            <option>SM</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                          <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <span className="title-font font-medium text-2xl text-gray-900">
                        $ {product.price}
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center dark:bg-blue-200 dark:text-blue-800 ms-3">
                        {product.discountPercentage > 0
                          ? `${product.discountPercentage}% OFF`
                          : ""}
                      </span>

                     <div className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      
                     <WishlistIcon product={product} />
                     
                     </div>
                     
                    </div>
                    <br />
                  <div className='flex flex-col sm:flex-row  gap-2 items-center '>
                   <div className="flex justify-center items-center gap-2">
                    <h3>Quantity</h3>
                    <p className='quantity-desc flex items-center border-black'>
                      <span className='minus'
                           onClick={decQty}
                           >
                                <AiOutlineMinus />
                            </span>

                            <span className='num'>{qty}</span>

                            <span className='plus' 
                                onClick={incQty}
                            >
                                <AiOutlinePlus />
                            </span>

                        </p>
                        </div>
                      <div className="text-center">
                       <button className="flex ml-auto  md:mr-96 lg:mr-2 text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded" onClick={()=>addProduct(product , qty)} >
                        Add to Cart
                      </button> 
                      </div>
                      </div> 
                      <br />
                     <div>
                      <h2>Stock {product.stockLevel} in available</h2>
                      <h2>Category: {product.category} </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div>
                <Reviews />
              </div>
            </section>

          </div>
        );
      })}
    </div>
  );
}

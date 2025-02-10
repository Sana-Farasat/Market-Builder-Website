// // pages/product/[id]/page.tsx

// import { client } from "@/sanity/lib/client"; // adjust based on your structure
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";

// // This function tells Next.js which paths to pre-render at build time
// export async function getStaticPaths() {
//   const products = await client.fetch('*[_type == "product"]{_id}');
  
//   // Map over the products and return paths
//   const paths = products.map((product: { _id: string }) => ({
//     params: { id: product._id },
//   }));
  
//   return {
//     paths,
//     fallback: "blocking", // Ensures pages are built on-demand when requested
//   };
// }

// // This function fetches data for each product
// export async function getStaticProps({ params }: { params: { id: string } }) {
//   const { id } = params;

//   const product = await client.fetch(`*[_id == "${id}"]
//     {_id, name, description, price, category, imageUrl}`);

//   // If the product is not found, return a 404 error page
//   if (!product || product.length === 0) {
//     return { notFound: true };
//   }

//   return {
//     props: {
//       product: product[0],
//     },
//     revalidate: 10, // This will make sure the page is revalidated every 10 seconds
//   };
// }

// const ProductDetails = ({ product }: { product: any }) => {
//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <Image src={urlFor(product.imageUrl).url()} alt={product.name} width={400} height={400} />
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//     </div>
//   );
// };

// export default ProductDetails;

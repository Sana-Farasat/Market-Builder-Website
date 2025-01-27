import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export const revalidate = 10; //----> seconds

export async function generateStaticParams() {
  const query = `
    *[_type == 'product']{
    "slug":slug.current
    }`;
  const slugs = await client.fetch(query);

  // const slugRoutes:string[]=slugs.map((slug:{slug:string})=>{
  // slug.slug
  // })
  // return slugRoutes.map((slug:string)=>{{slug}})

  // Create an array of slug objects like [{ slug: 'slug1' }, { slug: 'slug2' }, ...]
  return slugs.map((slug: { slug: string }) => ({ slug: slug.slug }));
}

interface ProductData {
  _id: string;
  imageUrl: any;
  name: string;
  discountPercentage: number;
  stockLevel: number;
  description: string;
  category: string;
  price: number;
}

// interface ProductParams {
//     params: { slug: string };
//   }

export default async function BlogData({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const query = `  *[_type == 'product' && slug.current == '${slug}']{         
        _id,
        name,
        price,
        stockLevel,
        description,
        category,
        discountPercentage,
         "imageUrl": image.asset->url,
        
  }
`;
  const fetchData: ProductData[] = await client.fetch(query, {
    slug: slug,
  });
  //console.log(fetchData)

  //const {slug}= await params;
  //console.log(slug)

  return (
    <div>
      {/* {fetchData.map((data:any , index: any) => { */}
      {fetchData.map((data: ProductData, index: any) => {
        return (
          <div key={index}>
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
                  {/* {data.title} */}
                  {slug}
                </h1>
                <br />
                <Image
                  className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                  alt="hero"
                  src={urlFor(data.imageUrl).url()}
                  width={800}
                  height={300}
                />

                <div className="flex w-full justify-center items-end">
                  <p> Written by {data.name} </p>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}

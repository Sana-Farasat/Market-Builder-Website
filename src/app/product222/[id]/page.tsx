import Dynamic from "@/components/chunks-components/Dynamic";
import { client } from "@/sanity/lib/client";

export async function generateStaticParams(){
    const query=`
    *[_type == 'product']{
    _id
    }`;
    const slugs= await client.fetch(query);
    

    // Create an array of slug objects like [{ slug: 'slug1' }, { slug: 'slug2' }, ...]
    return slugs.map((_id: { id: string }) => ({ _id: _id.id }));
}

export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
return(
    <div>
        <Dynamic />
    </div>
)



}
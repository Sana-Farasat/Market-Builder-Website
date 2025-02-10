import Dynamic from "@/components/chunks-components/Dynamic";
import { client } from "@/sanity/lib/client";

//export const revalidate = 60

export async function generateStaticParams(){
    const query=`
    *[_type == 'product' && _id ]{
    _id
    }`;
    const slugs= await client.fetch(query);
    

    // Create an array of slug objects like [{ slug: 'slug1' }, { slug: 'slug2' }, ...]
    return slugs.map((_id: { _id: string }) => ({ _id: _id._id }));
}

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {

const {id} = await params
return(
    <div>
        <Dynamic params={{
            id: ""
        }} />
    </div>
)



}
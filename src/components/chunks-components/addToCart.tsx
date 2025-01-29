 //'use client';
// import { addToCart } from "@/app/actions/actions";
// import product from "./product"


// //const addToCart = (product: any) => {/

// const handleAddToCart =(e: React.MouseEvent , product : any)=>{
// e.preventDefault()
//  addToCart(product)
// //}

//   return (
//     <div>


//     <button className="bg-gradient-to-r from-blue-500 to-purple-500 texy-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-300 hover:scale-110 transition-transform duration-300 ease-in-out" onClick={(e)=> handleAddToCart(e, product)}>
// Add to Cart
//     </button>
//     </div>
//   )
// }

// export default handleAddToCart


 'use client';
import { addToCart } from "@/app/actions/actions";
import product from "./product";
import Swal from "sweetalert2";


// interface AddToCartProps {
//   product: any;
// }

interface ProductData {
    // _id: string;
    // imageUrl: string;
    // name: string;
    // discountPercentage: number;
    // stockLevel: number;
    // description: string;
    // category: string;
    // price: number;
    product: any;
  }

const HandleAddToCart = ( {product}: ProductData) => {
  const handleAddToCart = (e: React.MouseEvent ) => {
   // e.preventDefault();
    addToCart(product); // Call the addToCart function when the button is clicked
    Swal.fire({
        position:'top-right',
        icon: 'success',
        title: `${product.name} added to cart`,
        showConfirmButton: false,
        timer: 1000
    })
    //alert('ok')
    //console.log(HandleAddToCart)
  };

  return (
    <div>
        
      <button
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-300 hover:scale-110 transition-transform duration-300 ease-in-out"
        onClick={(e)=>handleAddToCart( product)}
      >
        Add to Cart
      </button>

    </div>
  );
};

export default HandleAddToCart;

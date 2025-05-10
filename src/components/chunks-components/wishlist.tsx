'use client'

import { useWishlist } from '@/app/context2/WishlistContext';
//import { useRouter } from 'next/router';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles for Toastify

type WishlistIconProps = {
  product: { _id: string; name: string; price: number; imageUrl: string };
};

// function App(){
//   const notify = () => toast("Wow so easy!");
//   return (
//     <div>
//       <button onClick={notify}>Notify!</button>
//       <ToastContainer />
//     </div>
//   );
// }

// Function to trigger toast notification
const notify = (message: string) => {
  toast(message);  // Show a toast notification with the given message
};

const WishlistIcon: React.FC<WishlistIconProps> = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isInWishlist = wishlist.some((item:any ) => item._id === product._id);
  const [isAdded, setIsAdded] = useState(isInWishlist);
  //const router = useRouter();

  const toggleWishlist = () => {
    if (isAdded) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
      notify(`Added ${product.name} to Wishlist`);  // Notify the user about addition
    }
    setIsAdded(!isAdded);
  };

 // console.log(wishlist)

  return (
    <div>
    <button
      onClick={toggleWishlist}
      className={`p-2 rounded-full ${isAdded ? 'bg-red-500' : 'bg-gray-300'} hover:bg-red-600 transition-colors`}
      aria-label={isAdded ? 'Remove from Wishlist' : 'Add to Wishlist'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-white"
      >
        <path
          fillRule="evenodd"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    {/* Add ToastContainer for showing toast notifications */}
    <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop closeOnClick />
    </div>
  );
};

export default WishlistIcon;

'use client'

import { useWishlist } from '@/app/context2/WishlistContext'
//import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const WishlistPage: NextPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
 // const router = useRouter();

  const handleRemove = (_id: string) => {
    removeFromWishlist(_id);
  };

  return (
    <div className="container mx-auto p-2 sm:p-6 max-w-screen-2xl sm:w-[90%]">
      <h1 className="text-3xl font-semibold mb-4 ">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty. Start adding some products!</p>
      ) : (
        // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className='flex flex-col'>
          {wishlist.map((item:any) => (
            <div key={item._id} className="border p-4 rounded-lg shadow-lg ">
              <div className='flex justify-between h-24 sm:h-20 '>
              <div className='flex gap-3 '>
              <Image 
              src={item.imageUrl} 
              alt={item.name} 
              height={120}
              width={120}
              className="w-20 h-20 object-cover rounded-lg mb-4" />
              <div className='flex flex-col'>
              <h2 className="text-sm sm:text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">${item.price}</p>
              </div>
              </div>
              <div className='flex '>
              <button
                onClick={() => handleRemove(item._id)}
                className="bg-red-500 text-white text-sm sm:text-base my-7 sm:my-5 md:my-4 lg:my-5 py-1 px-5 rounded hover:bg-red-700"
              >
                Remove 
              </button>
              </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link href="/">
        <p className="bg-blue-500 text-white mt-6 py-2 px-4 inline-block hover:bg-blue-700">Continue Shopping</p>
      </Link>
    </div>
  );
};

export default WishlistPage;

// // context/WishlistContext.tsx
// 'use client'
// import React, { createContext, ReactNode, useContext, useState } from 'react';

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   imageUrl: string;
// };

// interface WishlistProviderProps {
//     children: ReactNode;
//   }

// type WishlistContextType = {
//   wishlist: Product[];
//   addToWishlist: (product: Product) => void;
//   removeFromWishlist: (_id: string) => void;
// };

// const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error('useWishlist must be used within a WishlistProvider');
//   }
//   return context;
// };

// export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }: any) => {
//   const [wishlist, setWishlist] = useState<Product[]>([]);

//   const addToWishlist = (product: Product) => {
//     setWishlist((prev) => [...prev, product]);
//   };

//   const removeFromWishlist = (_id: string) => {
//     setWishlist((prev) => prev.filter((item) => item._id !== _id));
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Product = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
};

type WishlistContextType = {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (_id: string) => void;
  isProductInWishlist: (_id: string) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    if (typeof window !== 'undefined') {
      const storedWishlist = localStorage.getItem('wishlist');
      return storedWishlist ? JSON.parse(storedWishlist) : [];
    }
    return [];
  });

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      const updatedWishlist = [...prev, product];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Persist to localStorage
      return updatedWishlist;
    });
  };

  const removeFromWishlist = (_id: string) => {
    setWishlist((prev) => {
      const updatedWishlist = prev.filter((item) => item._id !== _id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Persist to localStorage
      return updatedWishlist;
    });
  };

  const isProductInWishlist = (_id: string) => {
    return wishlist.some((item) => item._id === _id);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isProductInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

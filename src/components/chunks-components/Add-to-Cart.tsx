"use client";

import { CartContext } from "@/app/context/CartContext";
import { useContext, useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const AddtoCart = ({ product }: any) => {
  const { cartItems, addProduct, qty, incQty, decQty }: any = useContext(CartContext);

  console.log(cartItems);

  //console.log(product)
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="flex gap-2 items-center px-0 sm:px-6">
        <h3>Quantity</h3>
        <p className="quantity-desc flex items-center border-black">
          <span className="minus" onClick={decQty}>
            <AiOutlineMinus />
          </span>
          <span className="num">{qty}</span>
          <span className="plus" onClick={incQty}>
            <AiOutlinePlus />
          </span>
        </p>
      </div>
      <button
        className="text-white bg-indigo-500 border-0 py-2 px-2 sm:px-6 focus:outline-none hover:bg-indigo-600 rounded"
        onClick={() => addProduct(product, qty)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddtoCart;


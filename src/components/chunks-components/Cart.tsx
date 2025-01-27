import { CartContext } from "@/app/context/CartContext";
import { useContext } from "react";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import product from "./product";

const Cart = () => {
  const {
    toggleCartItemQty,
    totalPrice,
    totalQuantity,
    cartItems,
    showCart,
    setShowCart,
  }: any = useContext(CartContext);
  const handleClose = () => {
    return setShowCart(!showCart);
  };

  function urlForImage(arg0: any) {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button className="cart-heading" onClick={handleClose}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">{totalQuantity}</span>
        </button>

        <div className="product-container">
          {cartItems.map((product: any) => {
            // Ensure imageUrl is correctly passed to urlFor function
            const imageUrl = product.imageUrl
              ? urlFor(product.imageUrl).url()
              : null;

            return (
              <div className="product" key={product._id}>
                {imageUrl && (
                  <Image
                    src={imageUrl} // Pass the correct URL to the src
                    alt={product.name} // Use product name for alt text
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                )}
                <div className="item-desc">
                  <div className="flex top">
                    <h5 className="text-[10px] ">{product.name}</h5>
                    <h4>{product.price}</h4>
                  </div>

                  <div className="flex bottom">
                    <div className="quantity-desc border border-black ">
                      <span
                        className="minus"
                        onClick={() => toggleCartItemQty(product._id, "minus")}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className="num">{product.quantity}</span>
                      <span
                        className="plus"
                        onClick={() => toggleCartItemQty(product._id, "plus")}
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                    <button type="button" className="text-red-700">
                      <TiDeleteOutline size={24} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="checkout-btn">
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

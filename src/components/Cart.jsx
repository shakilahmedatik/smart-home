import React, { useContext } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { CartContext } from "./Root";
import { deleteShoppingCart, removeFromDb } from "../utils/fakeDB";
import { toast } from "react-toastify";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  let total = 0;
  for (const product of cart) {
    total = total + product.price * product.quantity;
  }

  const handleRemoveItem = (id) => {
    toast.warning("Product Removed!", { autoClose: 500 });
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const notify = () => {
    if (cart.length) {
      setCart([]);
      deleteShoppingCart();
      return toast.success("Order Placed!!!", { autoClose: 500 });
    }
    return toast.error("Cart is empty!!!");
  };
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
        <h2 className="text-xl font-semibold">
          {cart.length ? "Review Cart Items" : "Cart is EMPTY!"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount: <span className="font-semibold">{total} $</span>
          </p>
          <p className="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <Link to="/shop">
            <button
              type="button"
              className="px-6 py-2 border rounded-full border-cyan-400"
            >
              Back <span className="sr-only sm:not-sr-only">to shop</span>
            </button>
          </Link>
          <button
            onClick={notify}
            type="button"
            className="px-6 py-2 border font-semibold rounded-full hover:bg-cyan-400 bg-cyan-200 text-gray-800"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

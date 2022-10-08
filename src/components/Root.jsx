import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const CartContext = createContext([]);
export const ProductContext = createContext([]);
const Root = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  const [product, setProduct] = useState(products);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default Root;

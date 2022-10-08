import React from "react";

const Product = ({ product }) => {
  const { name, picture, price, category } = product;
  return (
    <div>
      <img
        className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={picture}
        alt=""
      />
      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">{name}</p>
      <p className="text-gray-700">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium.
      </p>
    </div>
  );
};

export default Product;

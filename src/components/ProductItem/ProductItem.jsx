import React from "react";
import { useShop } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";

const ProductItem = ({ id, image, name, price, title }) => {
  const { currency } = useShop();

  return (
    <div className="text-gray-700 cursor-pointer relative ">
        <BiHeart className="absolute top-4 right-2 z-50 hover:text-red-500"/>
      <div className="overflow-hidden">
        <img
          src={image[0]}
          className="hover:scale-110 transition ease-in-out w-full"
        />
      </div>
      <p className="text-sm font-semibold mt-2">{title}</p>
      <div className="flex items-center justify-between">
        <p className="text-sm py-2">{name}</p>
        <p className="text-sm font-semibold ">
          {currency}
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;

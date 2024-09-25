import React, { useEffect, useState } from "react";
import { useShop } from "../../context/ShopContext";
import ProductItem from "../ProductItem/ProductItem";

const BestSeller = () => {
  const { products } = useShop();
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    const showBestSellerProduct = bestProduct.slice(0,6)
    setBestSeller(showBestSellerProduct);
  }, []);
  return (
    <div className="my-10">
      <div className="flex items-center justify-between py-4 text-primary">
        <p className="font-bold text-3xl">Best Seller</p>
        <p className="cursor-pointer underline text-sm hover:text-black">View More</p>
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

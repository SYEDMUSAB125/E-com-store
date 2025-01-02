import React, { useEffect, useState } from "react";
import { useShop } from "../../context/ShopContext";
import ProductItem from "../ProductItem/ProductItem";
import { useNavigate } from "react-router-dom";

const BestSeller = () => {
  const { products } = useShop(); // Get products from the context
  const [bestsellers, setBestsellers] = useState([]); // State to store filtered bestsellers
  const navigate = useNavigate();

  useEffect(() => {
    // Filter products where bestseller is true
    const filteredProducts = products.filter((product) => product.bestseller);
    setBestsellers(filteredProducts);
  }, [products]); // Refetch whenever products update

  const handleProductClick = (item) => {
    navigate(`/product_detail/${item.id}`); // Navigate using the product id
  };

  return (
    <div className="my-10">
      <div className="flex items-center justify-between py-4 text-primary">
        <p className="font-bold text-3xl">Best Seller</p>
        <p className="cursor-pointer underline text-sm hover:text-black">
          View More
        </p>
      </div>
      {/* Render Bestseller Products */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 gap-y-6">
        {bestsellers.length > 0 ? (
          bestsellers.map((item) => (
            <div key={item.id} onClick={() => handleProductClick(item)}>
              <ProductItem
                id={item.id}
                title={item.title}
                name={item.name}
                image={item.images[0]} // Display the first image from the images array
                price={item.price}
              />
            </div>
          ))
        ) : (
          <p>No bestsellers available</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;

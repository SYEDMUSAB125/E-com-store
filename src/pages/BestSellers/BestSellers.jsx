import React, { useEffect, useState } from "react";
import { useShop } from "../../context/ShopContext";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useNavigate } from "react-router-dom";

const BestSellersPage = () => {
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
    <div className="px-4 sm:px-[5vw] md:px-[7vw] 2xl:px-[9vw]">
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 gap-y-6 mt-10">
          {bestsellers.length > 0 ? (
            bestsellers.map((item) => (
              <div key={item.id} onClick={() => handleProductClick(item)}>
                <ProductItem
                  id={item.id}
                  title={item.title}
                  name={item.name}
                  image={item.images} // Pass product image URL
                  price={item.price}
                />
              </div>
            ))
          ) : (
            <p>No bestsellers available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSellersPage;

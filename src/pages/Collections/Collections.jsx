import React, { useEffect, useState } from "react";
import { useShop } from "../../context/ShopContext";
import ProductItem from "../../components/ProductItem/ProductItem";
import CollectionsFilters from "./CollectionsFilters";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  const { products } = useShop();  // Getting products from context
  const [filterProducts, setFilterProducts] = useState([]);
  const navigate = useNavigate();

  // Effect to update filtered products whenever `products` changes
  useEffect(() => {
    setFilterProducts(products);
     // Set products to filtered products (Add filtering logic if needed)
  }, [products]);

  const handleProductClick = (item) => {
    navigate(`/product_detail/${item.id}`); // Navigate using the correct product id
  };

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] 2xl:px-[9vw]">
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter options */}
        <CollectionsFilters />

        {/* Displaying the filtered products */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 gap-y-6 mt-10">
            {filterProducts.length > 0 ? (
              filterProducts.map((item) => (
                <div key={item.id} onClick={() => handleProductClick(item)}>
                  {/* Click handler */}
                  <ProductItem
                    id={item.id}  // Use product's id
                    title={item.title}  // Display product title
                    name={item.name}  // Display product name
                    image={item.images}  // Pass product image URL
                    price={item.price}  // Display product price
                  />
                </div>
              ))
            ) : (
              <p>No products available</p>  // Fallback message when no products are found
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;

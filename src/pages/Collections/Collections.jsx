import React, { useEffect, useState } from "react";
import { useShop } from "../../context/ShopContext";
import ProductItem from "../../components/ProductItem/ProductItem";
import CollectionsFilters from "./CollectionsFilters";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  const { products } = useShop();
  const [filterProducts, setFilterProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    setFilterProducts(products);
  }, [products]); 

  const handleProductClick = (item) => {
    navigate(`/product_detail/${item._id}`);
  };

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] 2xl:px-[9vw]">
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter options */}
        <CollectionsFilters />
        {/* Mapping the Filter */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 gap-y-6 mt-10">
            {filterProducts.map((item, index) => (
              <div key={index} onClick={() => handleProductClick(item)}>
                {" "}
                {/* Click handler */}
                <ProductItem
                  id={item._id}
                  title={item.title}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;

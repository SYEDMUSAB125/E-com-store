import React, { useEffect, useState } from "react";
import { useShop } from "../../context/ShopContext";
import ProductItem from "../../components/ProductItem/ProductItem";

import CollectionsFilters from "./CollectionsFilters";

const Collections = () => {
  const { products } = useShop();
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter options */}
      <CollectionsFilters />
      {/* Maping the Filter */}
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 gap-y-6 mt-10">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              title={item.title}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;

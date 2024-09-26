import React, { useEffect, useState } from "react";
import { useShop } from "../../context/ShopContext";
import ProductItem from "../../components/ProductItem/ProductItem";
import CollectionsFilters from "./CollectionsFilters";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  const { products, toggleWishlist, isInWishlist } = useShop();  // Get toggleWishlist and isInWishlist
  const [filterProducts, setFilterProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  const handleProductClick = (item) => {
    navigate(`/product_detail`, { state: { product: item } });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <CollectionsFilters />
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 gap-y-6 mt-10">
          {filterProducts.map((item, index) => (
            <div key={index}>
              <ProductItem
                id={item._id}
                title={item.title}
                name={item.name}
                image={item.image}
                price={item.price}
                isInWishlist={isInWishlist(item)}  // Pass whether the item is in wishlist
                onToggleWishlist={() => toggleWishlist(item)}  // Toggle wishlist on heart click
                onClick={() => handleProductClick(item)}  // Click handler for product details
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;

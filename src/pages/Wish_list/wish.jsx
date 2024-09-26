import React from "react";
import { useShop } from "../../context/ShopContext";
import ProductItem from "../../components/ProductItem/ProductItem";

const WishList = () => {
  const { wishlist } = useShop();

  return (
    <div className="pt-10">
      <h1 className="text-2xl font-semibold">My Wish List</h1>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 gap-y-6 mt-10">
          {wishlist.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              title={item.title}
              name={item.name}
              image={item.image}
              price={item.price}
              isInWishlist={true}  // All items here are already in wishlist
            />
          ))}
        </div>
      ) : (
        <p>Your wish list is empty.</p>
      )}
    </div>
  );
};

export default WishList;

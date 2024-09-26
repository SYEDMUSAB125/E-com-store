import { createContext, useContext, useState } from "react";
import { products } from "../assets/assets";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const currency = "Rs";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [wishlist, setWishlist] = useState([]);  // Wishlist state

  // Function to check if a product is in the wishlist
  const isInWishlist = (product) => {
    return wishlist.some((item) => item._id === product._id);
  };

  // Function to add or remove a product from the wishlist
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (isInWishlist(product)) {
        return prevWishlist.filter((item) => item._id !== product._id);  // Remove from wishlist
      } else {
        return [...prevWishlist, product];  // Add to wishlist
      }
    });
  };

  const value = {
    currency,
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    wishlist,
    toggleWishlist,   // Function to add/remove from wishlist
    isInWishlist,     // Function to check if an item is in wishlist
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => useContext(ShopContext);

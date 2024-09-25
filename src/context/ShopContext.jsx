import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const currency = "Rs";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);



  const value = {
    currency,
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,

  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => useContext(ShopContext);

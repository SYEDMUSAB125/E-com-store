import { createContext, useContext } from "react";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
    const currency = 'Rs'
  const value = {currency};
  return (
<ShopContext.Provider value={value}>
    {children}
</ShopContext.Provider>)
};

export const useShop = () => useContext(ShopContext);
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const currency = "Rs";
  const [products, setProducts] = useState([]); // State to store products
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Fetch products from backend API
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/get_products'); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data); // Set the fetched products into the state
    } catch (error) {
      toast.error("Error fetching products: " + error.message);
    }
  };

  // Call fetchProducts when the context is loaded
  useEffect(() => {
    fetchProducts();
    
  }, []); // Empty dependency array to call only once when the component mounts

  const value = {
    currency,
    products, // Now products come from state, not static import
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => useContext(ShopContext);

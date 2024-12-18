import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const currency = "Rs";
  const [products, setProducts] = useState([]); // State to store products
  const [cart, setCart] = useState([]); // Cart state to hold the products added to cart
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Fetch products from backend API
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/get_products"); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      console.log(data);
      setProducts(data); // Set the fetched products into the state
    } catch (error) {
      toast.error("Error fetching products: " + error.message);
    }
  };

  // Call fetchProducts when the context is loaded
  useEffect(() => {
    fetchProducts();
  }, []); // Empty dependency array to call only once when the component mounts

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
      );
      if (existingProduct) {
        // Update quantity of existing product if it already exists in cart
        return prevCart.map((item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product doesn't exist in cart, add it
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    toast.success("Product added to cart!");
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast.info("Product removed from cart");
  };

  const value = {
    currency,
    products,
    cart,
    addToCart,
    removeFromCart,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => useContext(ShopContext);

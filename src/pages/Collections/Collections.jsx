import React, { useEffect, useState } from "react";
import { useShop } from "../../context/ShopContext";
import ProductItem from "../../components/ProductItem/ProductItem";
import CollectionsFilters from "./CollectionsFilters";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  const { products } = useShop(); // Getting products from context
  const [filterProducts, setFilterProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
    sizes: [], // Array of selected sizes (e.g., ['small', 'medium'])
    stock: "all", // "inStock", "outOfStock", or "all"
    bestseller: false, // true or false
    priceRange: [100, 10000], // Default price range [min, max]
    sortBy: "", // Sorting option (e.g., "price-asc", "price-desc", etc.)
    collection: "", // Selected collection
    fabric: "", // Selected fabric
  });

  const navigate = useNavigate();

  // Apply filters whenever products or active filters change
  useEffect(() => {
    applyFilters();
  }, [products, activeFilters]);

  const applyFilters = () => {
    let filtered = [...products];

    // If no filters are selected, display all products
    if (
      !activeFilters.sizes.length &&
      activeFilters.stock === "all" &&
      !activeFilters.bestseller &&
      !activeFilters.priceRange &&
      !activeFilters.collection &&
      !activeFilters.fabric
    ) {
      setFilterProducts(products);
      return;
    }

    // Filter by size
    if (activeFilters.sizes.length > 0) {
      filtered = filtered.filter((product) =>
        activeFilters.sizes.some((size) => product.sizes.includes(size))
      );
    }

    // Filter by price range (min and max)
    filtered = filtered.filter(
      (product) => product.price >= activeFilters.priceRange[0] && product.price <= activeFilters.priceRange[1]
    );

    // Filter by collection
    if (activeFilters.collection) {
      filtered = filtered.filter(
        (product) => product.collection === activeFilters.collection
      );
    }

    // Filter by fabric
    if (activeFilters.fabric) {
      filtered = filtered.filter((product) => product.fabric === activeFilters.fabric);
    }

    // Filter by stock availability
    if (activeFilters.stock === "inStock") {
      filtered = filtered.filter((product) => product.quantity > 0);
    } else if (activeFilters.stock === "outOfStock") {
      filtered = filtered.filter((product) => product.quantity === 0);
    }

    // Filter by bestseller
    if (activeFilters.bestseller) {
      filtered = filtered.filter((product) => product.bestseller);
    }

    // Sort products based on selected criteria
    if (activeFilters.sortBy) {
      if (activeFilters.sortBy === "price-asc") {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (activeFilters.sortBy === "price-desc") {
        filtered = filtered.sort((a, b) => b.price - a.price);
      } else if (activeFilters.sortBy === "newest") {
        filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      }
    }

    // Set the filtered products
    setFilterProducts(filtered);
  };

  const handleProductClick = (item) => {
    navigate(`/product_detail/${item.id}`); // Navigate using the correct product id
  };

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] 2xl:px-[9vw]">
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        <CollectionsFilters
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 gap-y-6 mt-10">
            {filterProducts.length > 0 ? (
              filterProducts.map((item) => (
                <div key={item.id} onClick={() => handleProductClick(item)}>
                  <ProductItem
                    id={item.id}
                    title={item.title}
                    name={item.name}
                    image={item.images[0]} // Pass the first image from the array
                    price={item.price}
                  />
                </div>
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;

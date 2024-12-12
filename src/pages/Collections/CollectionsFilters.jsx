import React, { useState, useEffect } from "react";

const CollectionsFilters = ({ activeFilters, setActiveFilters }) => {
  const [selectedSizes, setSelectedSizes] = useState(activeFilters.sizes);
  const [stockFilter, setStockFilter] = useState(activeFilters.stock);
  const [bestsellerFilter, setBestsellerFilter] = useState(activeFilters.bestseller);
  const [priceRange, setPriceRange] = useState(activeFilters.priceRange || null); // Default to null
  const [selectedColor, setSelectedColor] = useState(activeFilters.color || "light");
  const [showPriceFilter, setShowPriceFilter] = useState(false);

  useEffect(() => {
    setPriceRange(activeFilters.priceRange || null); // Set priceRange to null if not provided
  }, [activeFilters.priceRange]);

  const handleSizeChange = (size) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];
    setSelectedSizes(updatedSizes);
    setActiveFilters((prev) => ({ ...prev, sizes: updatedSizes }));
  };

  const handleStockChange = (stock) => {
    setStockFilter(stock);
    setActiveFilters((prev) => ({ ...prev, stock }));
  };

  const handleBestsellerChange = (bestseller) => {
    setBestsellerFilter(bestseller);
    setActiveFilters((prev) => ({ ...prev, bestseller }));
  };

  const handlePriceChange = (event) => {
    const value = event.target.value.split(',').map(Number);
    setPriceRange(value);
    setActiveFilters((prev) => ({ ...prev, priceRange: value }));
  };

  const handleColorChange = (event) => {
    const value = event.target.value;
    setSelectedColor(value);
    setActiveFilters((prev) => ({ ...prev, color: value }));
  };

  // Clear price range filter
  const clearPriceRange = () => {
    setPriceRange(null);
    setActiveFilters((prev) => ({ ...prev, priceRange: null }));
  };

  return (
    <div className="w-full sm:w-1/4">
      <h3 className="text-lg font-bold mb-4">Filters</h3>

      {/* Sizes Filter */}
      <div>
        <h4 className="font-medium">Size</h4>
        {["small", "medium", "large"].map((size) => (
          <div key={size} className="flex items-center">
            <input
              type="checkbox"
              id={`size-${size}`}
              checked={selectedSizes.includes(size)}
              onChange={() => handleSizeChange(size)}
            />
            <label htmlFor={`size-${size}`} className="ml-2">
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </label>
          </div>
        ))}
      </div>

      {/* Stock Filter */}
      <div className="mt-4">
        <h4 className="font-medium">Stock</h4>
        <div>
          <input
            type="radio"
            id="stock-all"
            name="stock"
            checked={stockFilter === "all"}
            onChange={() => handleStockChange("all")}
          />
          <label htmlFor="stock-all" className="ml-2">
            All
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="stock-inStock"
            name="stock"
            checked={stockFilter === "inStock"}
            onChange={() => handleStockChange("inStock")}
          />
          <label htmlFor="stock-inStock" className="ml-2">
            In Stock
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="stock-outOfStock"
            name="stock"
            checked={stockFilter === "outOfStock"}
            onChange={() => handleStockChange("outOfStock")}
          />
          <label htmlFor="stock-outOfStock" className="ml-2">
            Out of Stock
          </label>
        </div>
      </div>

      {/* Bestseller Filter */}
      <div className="mt-4">
        <h4 className="font-medium">Bestseller</h4>
        <div>
          <input
            type="checkbox"
            id="bestseller"
            checked={bestsellerFilter}
            onChange={(e) => handleBestsellerChange(e.target.checked)}
          />
          <label htmlFor="bestseller" className="ml-2">
            Bestseller
          </label>
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mt-4">
        <h4 className="font-medium">Price Range</h4>
        {priceRange ? (
          <div>
            <input
              type="range"
              id="price-range-max"
              min="100"
              max="10000"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange({ target: { value: `${priceRange[0]},${e.target.value}` } })}
              className="w-full"
            />
            <div className="flex justify-between">
              <span>100</span>
              <span>{priceRange[1]}</span>
              <span>10000</span>
            </div>
            <button
              onClick={clearPriceRange}
              className="text-red-500 mt-2"
            >
              <span className="text-xl">×</span> Clear Price Range
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowPriceFilter(true)}
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
          >
            Select Price Range
          </button>
        )}
      </div>

      {/* Color Filter */}
      <div className="mt-4">
        <h4 className="font-medium">Color</h4>
        {["dark", "light", "custom"].map((color) => (
          <div key={color} className="flex items-center">
            <input
              type="radio"
              id={`color-${color}`}
              name="color"
              value={color}
              checked={selectedColor === color}
              onChange={handleColorChange}
            />
            <label htmlFor={`color-${color}`} className="ml-2">
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsFilters;

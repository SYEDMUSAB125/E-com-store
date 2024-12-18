import React, { useState, useEffect } from "react";

const CollectionsFilters = ({ activeFilters, setActiveFilters }) => {
  const [selectedSizes, setSelectedSizes] = useState(activeFilters.sizes || []);
  const [stockFilter, setStockFilter] = useState(activeFilters.stock || null);
  const [bestsellerFilter, setBestsellerFilter] = useState(activeFilters.bestseller || null);
  const [priceRange, setPriceRange] = useState(activeFilters.priceRange || null);
  const [selectedColor, setSelectedColor] = useState(activeFilters.color || null);

  const [showSizeModal, setShowSizeModal] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [showColorModal, setShowColorModal] = useState(false);
  const [showStockModal, setShowStockModal] = useState(false);
  const [showBestsellerModal, setShowBestsellerModal] = useState(false);

  useEffect(() => {
    setPriceRange(activeFilters.priceRange || null);
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

  const clearPriceRange = () => {
    setPriceRange(null);
    setActiveFilters((prev) => ({ ...prev, priceRange: null }));
  };

  const toggleSizeModal = () => setShowSizeModal(!showSizeModal);
  const togglePriceModal = () => setShowPriceModal(!showPriceModal);
  const toggleColorModal = () => setShowColorModal(!showColorModal);
  const toggleStockModal = () => setShowStockModal(!showStockModal);
  const toggleBestsellerModal = () => setShowBestsellerModal(!showBestsellerModal);

  return (
    <div className="w-full sm:w-1/4">
      <h3 className="text-lg font-bold mb-4">Filters</h3>

      {/* Size Filter */}
      <div className="mb-4">
        <button
          onClick={toggleSizeModal}
          className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark flex justify-between items-center"
        >
          <span>Select Size</span>
          <span>{showSizeModal ? "-" : "+"}</span>
        </button>

        {/* Size Modal */}
        {showSizeModal && (
          <div className="transition-all duration-300 overflow-hidden mt-2">
            <div className="modal-content p-4 border-t">
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
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <button
          onClick={togglePriceModal}
          className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark flex justify-between items-center"
        >
          <span>Select Price Range</span>
          <span>{showPriceModal ? "-" : "+"}</span>
        </button>

        {/* Price Range Modal */}
        {showPriceModal && (
          <div className="transition-all duration-300 overflow-hidden mt-2">
            <div className="modal-content p-4 border-t">
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
                  <button onClick={clearPriceRange} className="text-red-500 mt-2">
                    <span className="text-xl">×</span> Clear Price Range
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowPriceModal(true)}
                  className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
                >
                  Select Price Range
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <button
          onClick={toggleColorModal}
          className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark flex justify-between items-center"
        >
          <span>Select Color</span>
          <span>{showColorModal ? "-" : "+"}</span>
        </button>

        {/* Color Modal */}
        {showColorModal && (
          <div className="transition-all duration-300 overflow-hidden mt-2">
            <div className="modal-content p-4 border-t">
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
        )}
      </div>

      {/* Stock Filter */}
      <div className="mb-4">
        <button
          onClick={toggleStockModal}
          className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark flex justify-between items-center"
        >
          <span>Select Stock Availability</span>
          <span>{showStockModal ? "-" : "+"}</span>
        </button>

        {/* Stock Modal */}
        {showStockModal && (
          <div className="transition-all duration-300 overflow-hidden mt-2">
            <div className="modal-content p-4 border-t">
              <h4 className="font-medium">Stock Availability</h4>
              {["In Stock", "Out of Stock"].map((status) => (
                <div key={status} className="flex items-center">
                  <input
                    type="radio"
                    id={`stock-${status}`}
                    name="stock"
                    value={status}
                    checked={stockFilter === status}
                    onChange={() => handleStockChange(status)}
                  />
                  <label htmlFor={`stock-${status}`} className="ml-2">
                    {status}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bestseller Filter */}
      <div className="mb-4">
        <button
          onClick={toggleBestsellerModal}
          className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark flex justify-between items-center"
        >
          <span>Select Bestseller</span>
          <span>{showBestsellerModal ? "-" : "+"}</span>
        </button>

        {/* Bestseller Modal */}
        {showBestsellerModal && (
          <div className="transition-all duration-300 overflow-hidden mt-2">
            <div className="modal-content p-4 border-t">
              <h4 className="font-medium">Bestseller</h4>
              {["Yes", "No"].map((status) => (
                <div key={status} className="flex items-center">
                  <input
                    type="radio"
                    id={`bestseller-${status}`}
                    name="bestseller"
                    value={status}
                    checked={bestsellerFilter === status}
                    onChange={() => handleBestsellerChange(status)}
                  />
                  <label htmlFor={`bestseller-${status}`} className="ml-2">
                    {status}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionsFilters;

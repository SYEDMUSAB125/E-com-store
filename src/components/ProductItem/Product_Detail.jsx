import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useShop } from "../../context/ShopContext";

const ProductDetail = () => {
  const { state } = useLocation();
  // const { id, title, name, image, price, description, category } = state || {};
  const { products } = useShop();
  const { productId } = useParams();
  const [productData, setProductData] = useState([]);
  const [image,setImage] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [products]);
  // console.log(productData.image.map(item => item))

  const [selectedColor, setSelectedColor] = useState("black");
  const [isFittingOpen, setIsFittingOpen] = useState(false);
  const [isFabricOpen, setIsFabricOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  // const similarProducts = products.filter(
  //   (product) => product.category === category && product._id !== id
  // );

  // Demo image URLs (these can be replaced by your actual images)
  const demoImages = [
    "https://via.placeholder.com/200", // Replace with actual product image URLs
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
  ];

  return (
    <div className="py-10 px-4 lg:px-[5vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Gallery */}
        <div className="space-y-4">
          <img
            src={image}
            className="w-full h-[400px] object-cover"
          />
          <div className="grid grid-cols-3 gap-2">
            {productData.image?.map((item, index) => (
              <img
                src={item}
                key={index}
                className="w-full h-24 object-cover"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
        </div>

        {/* Main Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{productData.title}</h1>
          <p className="text-lg text-gray-500 mt-2">{productData.name}</p>

          {/* Price Section */}
          <p className="text-2xl font-bold mt-4">${productData.price}</p>

          {/* Color Selection */}
          <div className="mt-4">
            <p className="block text-sm font-medium">Color</p>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="black"
                  checked={selectedColor === "black"}
                  onChange={() => setSelectedColor("black")}
                  className="hidden"
                />
                <div className="w-6 h-6 bg-black rounded-full border-2 cursor-pointer"></div>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="white"
                  checked={selectedColor === "white"}
                  onChange={() => setSelectedColor("white")}
                  className="hidden"
                />
                <div className="w-6 h-6 bg-white rounded-full border-2 cursor-pointer"></div>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="grey"
                  checked={selectedColor === "grey"}
                  onChange={() => setSelectedColor("grey")}
                  className="hidden"
                />
                <div className="w-6 h-6 bg-gray-400 rounded-full border-2 cursor-pointer"></div>
              </label>
            </div>
          </div>

          {/* Size selection */}
          <div className="mt-4">
            <label htmlFor="size" className="block text-sm font-medium">
              Size
            </label>
            <select
              id="size"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          {/* Add to cart button */}
          <div className="mt-6">
            <button className="w-full py-3 bg-green-600 text-white font-bold rounded">
              Add to Cart
            </button>
          </div>

          {/* Favorite/Compare Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="py-2 w-full bg-gray-200 rounded">
              ❤ Add to Wishlist
            </button>
            <button className="py-2 w-full bg-gray-200 rounded">
              ⍰ Compare
            </button>
          </div>

          {/* Shipping Info */}
          <div className="mt-6">
            <p className="text-sm">
              Free shipping on orders over $100. Easy returns.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information (e.g., Fitting, Fabric, Shipping) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Fitting Dropdown */}
        <div className="border-b border-gray-300 pb-4">
          <button
            className="flex justify-between items-center w-full py-2 text-xl font-bold"
            onClick={() => setIsFittingOpen(!isFittingOpen)}
          >
            Fitting
            <span>{isFittingOpen ? "-" : "+"}</span>
          </button>
          {isFittingOpen && (
            <p className="mt-2 text-gray-600">
              This product fits true to size. See our size guide for more
              details.
            </p>
          )}
        </div>

        {/* Fabric & Care Dropdown */}
        <div className="border-b border-gray-300 pb-4">
          <button
            className="flex justify-between items-center w-full py-2 text-xl font-bold"
            onClick={() => setIsFabricOpen(!isFabricOpen)}
          >
            Fabric & Care
            <span>{isFabricOpen ? "-" : "+"}</span>
          </button>
          {isFabricOpen && (
            <div className="mt-2 text-gray-600">
              <p>Material: 75% Nylon, 25% Elastane</p>
              <p>Care: Machine wash cold, tumble dry low.</p>
            </div>
          )}
        </div>

        {/* Shipping & Returns Dropdown */}
        <div className="border-b border-gray-300 pb-4">
          <button
            className="flex justify-between items-center w-full py-2 text-xl font-bold"
            onClick={() => setIsShippingOpen(!isShippingOpen)}
          >
            Shipping & Returns
            <span>{isShippingOpen ? "-" : "+"}</span>
          </button>
          {isShippingOpen && (
            <div className="mt-2 text-gray-600">
              <p>Free returns within 30 days.</p>
              <p>Standard shipping rates apply for orders under $100.</p>
            </div>
          )}
        </div>
      </div>

      {/* Similar Products Section */}
      <h2 className="text-2xl font-bold mt-12">You May Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {/* {similarProducts.map((product) => (
          <ProductItem key={product._id} {...product} />
        ))} */}
      </div>
    </div>
  );
};

export default ProductDetail;

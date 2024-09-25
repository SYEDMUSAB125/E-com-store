import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useShop } from "../../context/ShopContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const { products, currency } = useShop();
  const { productId } = useParams();
  const [productData, setProductData] = useState([]);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isFittingOpen, setIsFittingOpen] = useState(false);
  const [isFabricOpen, setIsFabricOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  const fetchProductData = async () => {
    try {
      const product = await products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setImage(product.image[0]);
      } else {
        console.error("Product not found");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const productPrice = useMemo(() => {
    return `${currency} ${productData.price}`;
  }, [currency, productData.price]);

  useEffect(() => {
    if (products.length) {
      fetchProductData();
    }
  }, [products]);

  return (
    <div className="py-10 px-4 lg:px-[5vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Gallery */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row product-image">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image?.map((item, index) => (
              <img
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" />
          </div>
        </div>

        {/* Main Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{productData.title}</h1>
          <p className="text-lg text-gray-500 mt-2">{productData.name}</p>

          {/* Price Section */}
          <p className="text-2xl font-bold mt-4">{productPrice}</p>
          {/* Select Colors */}
          {productData.colors && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select Color</p>
              <div className="flex gap-3">
                {productData.colors?.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedColor(item)}
                    style={{ backgroundColor: item }}
                    className={`outline outline-1 outline-offset-2 rounded-full h-5 w-5 cursor-pointer ${
                      item === selectedColor
                        ? "outline-primary outline-2 h-6 w-6"
                        : ""
                    }`}
                  ></div>
                ))}
              </div>
              {selectedColor && (
                <p className="capitalize">Selected Color : {selectedColor}</p>
              )}
            </div>
          )}

          {/* Size selection */}
          {productData.sizes && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes?.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`border py-2 bg-gray-100 px-4 ${
                      item == size ? "border-primary" : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to cart button */}
          <div className="mt-6">
            <button className="px-5 py-3 w-full bg-primary text-white font-bold rounded active:opacity-90">
              Add to Cart
            </button>
          </div>

          {/* Favorite/Compare Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="py-2 w-full bg-gray-300 rounded active:opacity-90">
              ❤ Add to Wishlist
            </button>
            <button className="py-2 w-full bg-gray-300 rounded active:opacity-90">
              ⍰ Compare
            </button>
          </div>
          <hr className="h-1 bg-primary border-none outline-none my-5 opacity-25 rounded-full" />
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

      {/* Toastify Container */}
      <ToastContainer />

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

import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useShop } from "../../context/ShopContext"; // Use the ShopContext
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2"; // Import SweetAlert2

const ProductDetail = () => {
  const { products, currency, addToCart } = useShop(); // Use addToCart from context
  const { productId } = useParams(); // Get the product ID from URL params
  const [productData, setProductData] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [size, setSize] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [mainImage, setMainImage] = useState(""); // State for the main image

  const fetchProductData = async () => {
    if (products && products.length) {
      try {
        const id = Number(productId);
        const product = products.find((item) => item.id === id);
        if (product) {
          setProductData(product);
          setMainImage(product.images?.[0] || "/path/to/default-image.jpg"); // Set the first image as default
        } else {
          console.error(`Product with ID ${productId} not found.`);
          setProductData(null);
        }
      } catch (error) {
        console.error(`Error fetching product with ID ${productId}:`, error);
        setProductData(null);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const productPrice = useMemo(() => {
    return `${currency} ${productData?.price}`;
  }, [currency, productData?.price]);

  useEffect(() => {
    if (products && products.length) {
      fetchProductData();
    }
  }, [products, productId]);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!productData) {
    return <div className="text-center py-10">Product not found</div>;
  }

  const productImages = productData.images || ["/path/to/default-image.jpg"]; // Fallback if no images available

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (!selectedColor || !size) {
      // Use SweetAlert2 instead of alert
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please select a color and size before adding to the cart.',
      });
      return;
    }
    const cartItem = {
      id: productData.id,
      name: productData.name,
      image: mainImage,
      price: productData.price,
      color: selectedColor,
      size: size,
    };
    addToCart(cartItem); // Add to cart using context

    // SweetAlert2 success message
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      text: `${productData.name} has been added to your cart.`,
    });
  };

  return (
    <div className="py-10 px-4 lg:px-[5vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row product-image">
          {/* Image Thumbnails */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productImages.map((image, index) => (
              <img
                key={index}
                src={image}
                className="cursor-pointer hover:scale-105 transition w-full ease-in-out bg-green-400 max-h-[100px]"
                alt={`Thumbnail ${index}`}
                onClick={() => setMainImage(image)} // Update main image on click
              />
            ))}
          </div>

          {/* Main Product Image */}
          <div className="w-full sm:w-[80%]">
            <img
              src={mainImage}
              className="w-full h-auto"
              alt={productData.name}
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{productData.title}</h1>
          <p className="text-lg text-gray-500 mt-2">{productData.name}</p>
          <p className="text-2xl font-bold mt-4">{productPrice}</p>

          {productData.colors && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select Color</p>
              <div className="flex gap-3">
                {productData.colors.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedColor(item)}
                    style={{ backgroundColor: item }}
                    className={`outline outline-1 outline-offset-2 rounded-full h-5 w-5 cursor-pointer ${
                      item === selectedColor ? "outline-primary  outline-2 h-5 w-5 bg-black" : ""
                    }`}
                  ></div>
                ))}
              </div>
              {selectedColor && <p className="capitalize">Selected Color: {selectedColor}</p>}
            </div>
          )}

          {productData.sizes && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`border py-2 bg-gray-100 px-4 ${item === size ? "bg-green-600" : ""}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6">
            <button
              onClick={handleAddToCart} // Trigger Add to Cart
              className="px-5 py-3 w-full bg-primary text-white font-bold rounded"
            >
              Add to Cart
            </button>
          </div>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

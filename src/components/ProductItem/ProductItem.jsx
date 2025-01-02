import React from "react";
import { useShop } from "../../context/ShopContext";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductItem = ({ id, name, title, price, image }) => {
  const { currency } = useShop();

  // Function to handle wishlist add
  const handleWishlistAdd = (e) => {
    e.stopPropagation(); // Prevent click event from propagating to parent
    console.log("Added to wishlist", id); // Add to your wishlist logic here
  };

  // Ensure image exists and has at least one item
  const productImage = image || "/path/to/default-image.jpg"; // Fallback to a default image if not available


  return (
    <div className="text-gray-700 relative overflow-hidden">
      {/* Wishlist Heart Icon */}
      <span
        className="h-10 w-10 absolute top-0 right-0 z-50 flex items-center justify-center cursor-pointer"
        onClick={handleWishlistAdd}
      >
        <BiHeart className=" hover:text-red-500 text-xl" />
      </span>

      {/* Image Click -> Route to Product Detail */}
      <Link to={`/product_detail/${id}`} className="overflow-hidden">
        <img
          src={productImage} // Use the product image or fallback
          className="hover:scale-105 transition w-full ease-in-out bg-green-400 max-h-[450px]"
          alt={name}
        
        />
      </Link>

      {/* Title of Product */}
      <p className="text-sm font-semibold mt-2">{title}</p>

      <div className="flex items-center justify-between">
        {/* Product Name (Click Handler) */}
        <p className="text-sm py-2 cursor-pointer">
          {name}
        </p>

        {/* Product Price */}
        <p className="text-sm font-semibold">
          {currency} {price}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;

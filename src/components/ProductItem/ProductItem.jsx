import React from "react";

const ProductItem = ({ id, title, name, image, price, isInWishlist, onToggleWishlist, onClick }) => {
  return (
    <div className="product-item" onClick={onClick}>
      <img src={image} alt={name} className="w-full h-auto" />
      <div className="product-details">
        <h2>{title}</h2>
        <p>{name}</p>
        <p>{price}</p>

        {/* Heart Icon for Wishlist */}
        <button onClick={(e) => { 
          e.stopPropagation();  // Stop the click event from propagating to the parent
          onToggleWishlist();   // Call the wishlist toggle function
        }}>
          {isInWishlist ? (
            <span>&#10084; {/* Filled Heart for in-wishlist items */}</span>
          ) : (
            <span>&#9825; {/* Empty Heart for non-wishlist items */}</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

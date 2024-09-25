// import React from 'react';
// import { FaTimes } from 'react-icons/fa';

// function CartModal({ onClose, cartData }) {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-600 hover:text-black"
//         >
//           <FaTimes/>
//         </button>

//         {cartData && cartData.length > 0 ? (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
//             <div className="space-y-4">
//               {cartData.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center space-x-4 border-b border-gray-200 pb-4"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-16 h-16 object-cover"
//                   />
//                   <div className="flex-1">
//                     <p className="text-sm font-medium">{item.name}</p>
//                     <p className="text-sm text-gray-500">Size: {item.size}</p>
//                     <p className="text-sm text-gray-500">Color: {item.color}</p>
//                   </div>
//                   <p className="font-semibold">${item.price}</p>
//                 </div>
//               ))}
//             </div>
//             <button className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
//               Check Out
//             </button>
//           </div>
//         ) : (
//           <div className="text-center">
//             <h2 className="text-xl font-semibold mb-4">Your Shopping Bag is Empty</h2>
//             <p className="text-gray-500 mb-6">Discover our collections and add products to your bag.</p>
//             <div className="space-y-3">
//               <button className="w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200">
//                 Collection
//               </button>
//               <button className="w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200">
//                 New In
//               </button>
//               <button className="w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200">
//                 Best Sellers
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CartModal;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaTimes } from "react-icons/fa";

// Mock Product Data
const mockProducts = [
  {
    _id: "1",
    title: "Wrap Top",
    name: "Top",
    image: "https://via.placeholder.com/100", // Replace with real images
    price: 160,
    size: "S",
    color: "White",
  },
  {
    _id: "2",
    title: "Casual Wild Leg",
    name: "Pants",
    image: "https://via.placeholder.com/100",
    price: 130,
    size: "S",
    color: "Dark Blue",
  },
  {
    _id: "3",
    title: "Essential Dress",
    name: "Dress",
    image: "https://via.placeholder.com/100",
    price: 195,
    size: "2X",
    color: "Black",
  },
];

const Collections = ({ setCartModalVisible, cartModalVisible }) => {
  const [filterProducts, setFilterProducts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate
  

  useEffect(() => {
    setFilterProducts(mockProducts);
  }, []);

  const handleProductClick = (item) => {
    navigate(`/product_detail`, { state: { product: item } });
  };

  return (
    <div className="flex relative">
      {/* Main Content Area */}
      <div className="flex-1">
        {/* Add your existing collections and filters here */}
      </div>

      {/* Sidebar Cart */}
      {cartModalVisible && (
        <div className="w-[30%] fixed top-0 right-0 h-full bg-white shadow-2xl shadow-primary p-6 z-[500]">
          {/* Close Button */}
          <button
            className="absolute top-4 left-4 text-gray-500 hover:text-gray-800"
            onClick={() => setCartModalVisible(false)}
          >
            <FaTimes />
          </button>

          <h2 className="text-lg font-semibold my-4">Your Cart</h2>
          <div className="flex flex-col gap-4">
            {filterProducts.map((item) => (
              <div key={item._id} className="flex items-center border-b pb-4">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                {/* Product Details */}
                <div className="flex flex-col flex-1 ml-4">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-xs text-gray-500">
                    Size: {item.size} | Color: {item.color}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center">
                      <button className="px-2 py-1 border rounded-l">-</button>
                      <input
                        type="text"
                        value="1" // Use state here to manage quantity
                        className="w-8 text-center border-y"
                        readOnly
                      />
                      <button className="px-2 py-1 border rounded-r">+</button>
                    </div>
                    {/* Product Price */}
                    <p className="text-sm font-semibold">${item.price}</p>
                  </div>
                </div>
                {/* Remove Button */}
                <button
                  className="ml-4 text-gray-400 hover:text-red-500"
                  onClick={() => console.log("Remove item")} // Implement remove logic
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          {/* Checkout Button */}
          <div className="mt-6">
            <button className="w-full bg-primary text-white py-2 rounded">
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collections;

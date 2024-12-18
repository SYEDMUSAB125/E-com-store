import React, { useState } from "react";
import { assets } from "../../assets/assets";  // Assuming assets is a local file
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";  // Import the custom hook to access user context
import { useShop } from "../../context/ShopContext";  // Adjust the path if needed
import CartModal from "../Your_Cart/CartModal";  // Correct path for CartModal

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [cartModalVisible, setCartModalVisible] = useState(false);  // State for Cart Modal
  const { setShowSearch } = useShop();
  const { user, clearUserData } = useUser();  // Access user context
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setVisible(!visible);  // Toggle dropdown visibility
  };

  const handleLogout = () => {
    clearUserData();  // Clear user data from context and localStorage
    navigate("/login");  // Redirect to login page
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium px-4 sm:px-[5vw] md:px-[7vw] 2xl:px-[9vw] z-[500]">
      <Link to={"/"}>Logo</Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 capitalize">
        <NavLink to={"/collections"} className={`flex flex-col items-center gap-1`}>
          <p>Collection</p>
        </NavLink>

        <NavLink to={"/bank_details"} className={`flex flex-col items-center gap-1`}>
          <p>Bank</p>
        </NavLink>

        {/* Conditionally render Login or Logout based on user state */}
        {user ? (
          <p
            className="cursor-pointer flex flex-col items-center gap-1"
            onClick={handleLogout}
          >
            Logout
          </p>
        ) : (
          <NavLink to={"/login"} className={`flex flex-col items-center gap-1`}>
            <p>Login</p>
          </NavLink>
        )}
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
          onClick={() => setShowSearch(true)}
        />

        {/* Profile icon with dropdown */}
        <div className="group relative">
          <img
            src={assets.profile_icon}  // This should be the profile icon
            alt="profile"
            className="w-5 cursor-pointer"
            onClick={toggleDropdown}  // Toggle dropdown on click
          />
          
          {/* User details dropdown */}
          {visible && (
            <div className="absolute right-0 top-full mt-2 w-[20vw] bg-slate-100 text-gray-500 rounded shadow-xl z-50">
              <div className="flex flex-col gap-2 py-3 px-5">
                {/* Display user profile image */}
                <div className="flex items-center gap-3">
                  <img
                    src={user?.profilePic || "https://via.placeholder.com/150"}  // Use demo image or user image
                    alt="User Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold">{user?.username}</p>
                    <p className="text-xs text-gray-600">{user?.email}</p>
                  </div>
                </div>

                {/* Display Logout button only when user is logged in */}
                {user && (
                  <p
                    className="cursor-pointer hover:text-black text-sm mt-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Cart icon with modal trigger */}
        <div className="relative cursor-pointer" onClick={() => setCartModalVisible(true)}>
          <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black rounded-full text-white aspect-square text-[8px]">
            {0}
          </p>
        </div>

        {/* Sidebar menu for small screens */}
        <img
          src={assets.menu_icon}
          alt="menu"
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>

      {cartModalVisible && (
        <div className="absolute">
          <CartModal
            setCartModalVisible={setCartModalVisible}
            cartModalVisible={cartModalVisible}
            cartData={[]}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;

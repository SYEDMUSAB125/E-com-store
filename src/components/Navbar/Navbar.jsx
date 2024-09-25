import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useShop } from "../../context/ShopContext";
import CartModal from "../Your_Cart/CartModal"; // Correct path for CartModal

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [cartModalVisible, setCartModalVisible] = useState(false); // State for Cart Modal
  const { setShowSearch } = useShop();

  return (
    <div className="flex items-center justify-between py-5 font-medium px-4 sm:px-[5vw] md:px-[7vw] 2xl:px-[9vw] z-[500]">
      <Link to={"/"}>Logo</Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 capitalize">
        <NavLink
          to={"/collections"}
          className={`flex flex-col items-center gap-1`}
        >
          <p>Collection</p>
        </NavLink>

        <NavLink
          to={"/bank_details"}
          className={`flex flex-col items-center gap-1`}
        >
          <p>Bank</p>
        </NavLink>

        <NavLink to={"/login"} className={`flex flex-col items-center gap-1`}>
          <p>Login</p>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
          onClick={() => setShowSearch(true)}
        />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-xl">
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart icon with modal trigger */}
        <div
          className="relative cursor-pointer"
          onClick={() => setCartModalVisible(true)}
        >
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

        <div
          className={`${
            visible ? "w-full h-screen" : "w-0"
          } absolute top-0 right-0 bottom-0 transition-all overflow-hidden bg-white`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              className="flex items-center gap-4 p-3"
              onClick={() => setVisible(false)}
            >
              <img
                src={assets.dropdown_icon}
                alt="dropdown"
                className="h-4 rotate-180"
              />
              <p>Back</p>
            </div>

            <NavLink
              onClick={() => setVisible(false)}
              to={"/"}
              className="py-2 pl-6 border-b border-gray-300"
            >
              <p>Home</p>
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to={"/collections"}
              className="py-2 pl-6 border-b border-gray-300"
            >
              <p>Collections</p>
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to={"/login"}
              className="py-2 pl-6 border-b border-gray-300"
            >
              <p>Login</p>
            </NavLink>
          </div>
        </div>
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

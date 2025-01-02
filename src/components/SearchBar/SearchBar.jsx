import React, { useEffect, useState } from "react";
import { useShop } from "../../context/ShopContext";
import {FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useShop();


  return showSearch ? (
    <div className={`border-t border-b bg-gray-50 text-center`}>
      <div className="inline-flex items-center justify-center border-b border-primary border-opacity-65 px-2 py-2 my-5 mx-3 md:w-2/3 w-4/5">
        <div className="flex flex-1">
          <FaSearch className="font-light mr-4 text-gray-300 text-lg " />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none bg-inherit text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <FaTimes onClick={() => setShowSearch(false)} className="text-lg font-light text-gray-400 cursor-pointer"/>
      </div>
    </div>
  ) : null;
};

export default SearchBar;

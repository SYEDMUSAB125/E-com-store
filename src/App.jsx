import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] 2xl:px-[9vw]">
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </div>
  );
};

export default App;

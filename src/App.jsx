import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Bank_Details from "./components/Bank_Details/Bank_Details";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import Login from "./pages/Login/Login";

import ContactUs from "./pages/Contactus/Contactus";
import Footer from "./components/Footer/Footer";
import NewIn from "./pages/NewIn/NewIn";
import ProductDetail from "./components/ProductItem/Product_Detail";
import CartModal from "./components/Your_Cart/CartModal";
import Dashboard from "./pages/Controlpanel/page";


const App = () => {
  const [isSigningUp, setIsSigningUp] = useState(false); // Step 1: Create state for isSigningUp
  const [user, setUser] = useState(null); // Step 2: Create state for user
  const location = useLocation(); // Get the current route

  // Check if the current route is the control panel
  const isControlPanel = location.pathname.startsWith("/control");

  return (
    <div className="main">
      {/* Conditionally render Navbar */}
      {!isControlPanel && <Navbar />}
      <Routes>
        <Route path="/control" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/newIn" element={<NewIn />} />
        <Route path="/collections" element={<Collections />} />
        <Route
          path="/login"
          element={<Login setUser={setUser} setIsSigningUp={setIsSigningUp} />} // Pass setUser as a prop
        />
        <Route path="/bank_details" element={<Bank_Details />} />
        <Route path="/product_detail/:productId" element={<ProductDetail />} />
      </Routes>
      {/* Conditionally render Footer */}
      {!isControlPanel && <Footer />}
    </div>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Bank_Details from "./components/Bank_Details/Bank_Details";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import Login from "./pages/Login/Login";
import PaymentFailedNotification from "./components/Notifications/Payment_Failed";
import PaymentSuccessfulNotification from "./components/Notifications/Payment_Succesful";
import ContactUs from "./pages/Contactus/Contactus";
import Footer from "./components/Footer/Footer";
import NewIn from "./pages/NewIn/NewIn";
import ProductDetail from "./components/ProductItem/Product_Detail";
import CartModal from "./components/Your_Cart/CartModal";
const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newIn" element={<NewIn />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bank_details" element={<Bank_Details />} />
        <Route path="/product_detail/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

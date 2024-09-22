import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Bank_Details from "./components/Bank_Details/Bank_Details";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import Login from "./pages/Login/Login";
import PaymentFailedNotification from "./components/Notifications/Payment_Failed";
import PaymentSuccessfulNotification from "./components/Notifications/Payment_Succesful";
import ContactUs from "./pages/Contactus/Contactus";

const App = () => {
  return (
    <div  className="px-4 sm:px-[5vw] md:px-[7vw] 2xl:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bank_details" element={<Bank_Details />} />
      </Routes>
    </div>
  );
};

export default App;

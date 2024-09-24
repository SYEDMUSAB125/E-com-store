import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import NewIn from "./pages/NewIn/NewIn";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home/><Collections/> </>} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/newIn" element={<NewIn />} />
        <Route path="/modiWeek" element={<Collections />} />
      </Routes>
    </div>
  );
};

export default App;
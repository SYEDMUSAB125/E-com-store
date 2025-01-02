import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ShopContextProvider } from "./context/ShopContext.jsx";
import { BrowserRouter } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { UserProvider } from "./context/UserContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <UserProvider>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
    </UserProvider>
  </BrowserRouter>
);

import React from "react";
import { FaHome, FaBox, FaClipboardList, FaUsers } from "react-icons/fa"; // Example icons

const AdminSidebar = ({ setActiveComponent, activeComponent }) => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4 flex flex-col justify-between sticky">
      {/* Header Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">Brand Admin</h2>
        
        <nav>
          <ul>
            {/* Dashboard Link */}
            <li className="mb-4">
              <button
                onClick={() => setActiveComponent("dashboard")}
                className={`flex items-center space-x-3 p-2 rounded-md w-full text-left transition-colors duration-200 ${
                  activeComponent === "dashboard" ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                }`}
              >
                <FaHome size={20} />
                <span>Dashboard</span>
              </button>
            </li>
            
            {/* Manage Products Link */}
            <li className="mb-4">
              <button
                onClick={() => setActiveComponent("products")}
                className={`flex items-center space-x-3 p-2 rounded-md w-full text-left transition-colors duration-200 ${
                  activeComponent === "products" ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                }`}
              >
                <FaBox size={20} />
                <span>Manage Products</span>
              </button>
            </li>

            {/* Orders Link */}
            <li className="mb-4">
              <button
                onClick={() => setActiveComponent("orders")}
                className={`flex items-center space-x-3 p-2 rounded-md w-full text-left transition-colors duration-200 ${
                  activeComponent === "orders" ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                }`}
              >
                <FaClipboardList size={20} />
                <span>Orders</span>
              </button>
            </li>

            {/* Customers Link */}
            <li className="mb-4">
              <button
                onClick={() => setActiveComponent("customer")}
                className={`flex items-center space-x-3 p-2 rounded-md w-full text-left transition-colors duration-200 ${
                  activeComponent === "customer" ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                }`}
              >
                <FaUsers size={20} />
                <span>Customers</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer Section */}
      <div>
        <p className="text-center text-sm text-gray-500 mt-8">
          © 2024 Brand Admin. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AdminSidebar;

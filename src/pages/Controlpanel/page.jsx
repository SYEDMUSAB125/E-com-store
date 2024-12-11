import React, { useState } from "react";
import AdminSidebar from "../../components/Admin/adminsidebar";
import DashboardHome from "../../components/Admin/dashboard";
import ManageProducts from "../../components/Admin/products";
import Orders from "../../components/Admin/orders";
import Customers from "../../components/Admin/customer";

const Dashboard = () => {
  // State to track the active component
  const [activeComponent, setActiveComponent] = useState("dashboard");

  // Function to render the appropriate component based on the active state
  const renderComponent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <DashboardHome />;
      case "products":
        return <ManageProducts />;
      case "orders":
        return <Orders />;
      case "customer":
        return <Customers />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar setActiveComponent={setActiveComponent} />

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 p-6">
        {renderComponent()} {/* Dynamically rendered component */}
      </div>
    </div>
  );
};

export default Dashboard;

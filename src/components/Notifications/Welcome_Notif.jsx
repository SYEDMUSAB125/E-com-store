import React, { useState, useEffect } from "react";

const WelcomeNotification = () => {
  const [showNotification, setShowNotification] = useState(true);

  // Automatically hide the notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!showNotification) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-primary w-1/2 h-1/2 rounded-lg shadow-lg p-8 flex flex-col justify-between items-center text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
        <p className="text-lg mb-8">
          Thank you for visiting [Your Brand Name]. Explore our latest collection and find your style!
        </p>
        <button
          onClick={() => setShowNotification(false)}
          className="bg-white text-black px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WelcomeNotification;

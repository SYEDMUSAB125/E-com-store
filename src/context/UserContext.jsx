import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context for user data
const UserContext = createContext();

// Custom hook to use the User context
export const useUser = () => {
  return useContext(UserContext);
};

// Create a UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user data from localStorage on initial load (if available)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to set user data
  const setUserData = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Save to localStorage
  };

  // Function to clear user data (log out)
  const clearUserData = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, setUserData, clearUserData }}>
      {children}
    </UserContext.Provider>
  );
};

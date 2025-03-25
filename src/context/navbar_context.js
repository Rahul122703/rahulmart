import React, { createContext, useState, useContext } from "react";

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <NavbarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  return useContext(NavbarContext);
};

export { NavbarProvider, NavbarContext };

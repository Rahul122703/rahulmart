import react, { useContext, createContext } from "react";

const filterContext = createContext();

export const filterProvider = ({ children }) => {
  return <filterContext.Provider value={{}}>{children}</filterContext.Provider>;
};

export const useFilterContext = () => {
  return useContext(filterContext);
};

import { useContext, createContext, useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      toast.success("Logged in");
      localStorage.setItem("loginStatus", "logged in");
    }
    if (
      !isAuthenticated &&
      isLoading &&
      localStorage.getItem("loginStatus") === "logged out"
    ) {
      localStorage.removeItem("loginStatus");
      toast.success("Logged Out");
    }
  }, [isAuthenticated, isLoading]);

  const logIn = () => {
    loginWithRedirect();
  };

  const logOut = () => {
    logout({
      returnTo: window.location.origin,
    });
    localStorage.setItem("loginStatus", "logged out");
  };

  return (
    <UserContext.Provider
      value={{
        logIn,
        logOut,
        loginWithRedirect,
        user,
        isLoading,
        isAuthenticated,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

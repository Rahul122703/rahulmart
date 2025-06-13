import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/user_context.js";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useUserContext();
  return isAuthenticated ? children : <Navigate to="/"></Navigate>;
};

export default PrivateRoute;

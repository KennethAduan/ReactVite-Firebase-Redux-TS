import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "@/services/state/redux/hooks";
const PrivateRoutes = () => {
  const location = useLocation();
  const { snapshot } = useAppSelector((state) => state.credential);

  // Redirect to /pos if userData exists and the user is trying to access the root ("/")
  if (snapshot && location.pathname === "/") {
    return <Navigate to="main" replace />;
  }

  // If no userData and the user is trying to access a protected route, redirect to login
  if (!snapshot && location.pathname !== "/") {
    return <Navigate to="/" replace />;
  }

  // Render children (protected routes) if userData exists or the user is at the login page
  return <Outlet />;
};

export default PrivateRoutes;

import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const location = useLocation();
  const userData = localStorage.getItem("userData");

  // Redirect to /pos if userData exists and the user is trying to access the root ("/")
  if (userData && location.pathname === "/") {
    return <Navigate to="main" replace />;
  }

  // If no userData and the user is trying to access a protected route, redirect to login
  if (!userData && location.pathname !== "/") {
    return <Navigate to="/" replace />;
  }

  // Render children (protected routes) if userData exists or the user is at the login page
  return <Outlet />;
};

export default PrivateRoutes;

import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const location = useLocation();
  const userData = localStorage.getItem("userData");

  if (!userData && location.pathname !== "/login") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;

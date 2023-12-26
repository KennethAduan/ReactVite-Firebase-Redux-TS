import { Login, Home, NotFoundPage } from "@/pages";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route index element={<Login />} />
        <Route path="/main" element={<Home />} />
        {/* Add the Protected Routes here */}
      </Route>
      <Route element={<NotFoundPage />} path="*" />
      <Route element={<Login />} path="/" />
    </Routes>
  );
};

export default MainRoutes;

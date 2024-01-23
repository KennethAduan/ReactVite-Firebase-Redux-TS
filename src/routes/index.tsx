import { Login, Home, NotFoundPage } from "@/pages";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route index element={<Login />} />

        {/* Add the Protected Routes here */}
      </Route>
      <Route path="/main" element={<Home />} />
      <Route element={<NotFoundPage />} path="*" />
      <Route element={<Login />} path="/" />
    </Routes>
  );
};

export default MainRoutes;

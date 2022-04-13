import { Outlet } from "react-router-dom";
import { auth } from "../firebase";

import LoginPage from "../pages/LoginPage";

const ProtectedRoute = () => {
  return auth.currentUser !== null ? <Outlet /> : <LoginPage />;
};

export default ProtectedRoute;

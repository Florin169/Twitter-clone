import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Trends from "./components/Trends";

const App = () => {
  return (
    <div className={`relative `}>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route
            path="/home"
            element={
              <>
                <Sidebar />
                <Feed />
                <Trends />
              </>
            }
          />
        </Route>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar />
              <Feed />
            </>
          }
        />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;

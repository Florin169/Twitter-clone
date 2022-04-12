import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/LoginPage";
import ReplyModal from "./components/ReplyModal";

const App = () => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div className={`relative ${toggleModal && "overscroll-y-none"}`}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar />
              <Feed toggleModal={toggleModal} setToggleModal={setToggleModal} />
            </>
          }
        />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;

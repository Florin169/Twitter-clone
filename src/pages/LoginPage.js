import React from "react";
import { Google } from "react-bootstrap-icons";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const logIn = () => {
    signInWithPopup(auth, provider).then(() => navigate("/home"));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className=" flex items-center font-bold w-48 p-2 h-14 bg-white rounded-full"
        onClick={logIn}
      >
        <Google size={17} className="mr-2" />
        Log in with Google
      </button>
    </div>
  );
};

export default LoginPage;

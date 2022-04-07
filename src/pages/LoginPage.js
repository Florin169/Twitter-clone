import React from "react";
import { Google } from "react-bootstrap-icons";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const LoginPage = () => {
  const logIn = () => {
    signInWithPopup(auth, provider);
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

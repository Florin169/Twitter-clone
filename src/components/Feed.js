import React from "react";
import { Stars } from "react-bootstrap-icons";
import Input from "./Input";

const Feed = () => {
  return (
    <div className="max-w-[600px] text-white flex-grow sm:ml-[114px] lg:ml-[315px] xl:ml-[480px] border-l border-r border-gray-600 h-screen ">
      <div className="flex justify-between items-center px-3 h-12 ">
        <h4 className="font-bold text-md">Home</h4>
        <Stars size={20} />
      </div>
      <div className="divide-y divide-gray-600">
        <Input />
      </div>
    </div>
  );
};

export default Feed;

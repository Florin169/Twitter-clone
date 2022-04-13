import React from "react";
import { Search } from "react-bootstrap-icons";

const Widget = () => {
  return (
    <div className="bg-[#273340] w-[400px] rounded-full h-[44px] mb-8 flex items-center">
      <div className="w-14 h-full flex items-center justify-center">
        <Search size={20} />
      </div>
      <input
        type="text"
        placeholder="Search Twitter"
        className="bg-transparent w-[83%] h-full outline-none"
      />
    </div>
  );
};

export default Widget;

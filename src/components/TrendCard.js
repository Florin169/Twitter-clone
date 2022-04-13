import React from "react";
import { ThreeDots } from "react-bootstrap-icons";

const TrendCard = () => {
  return (
    <div className="flex justify-between  w-[400px] h-20 py-2 px-4 hover:bg-[#252E38] cursor-pointer">
      <div>
        <div className="flex text-xs space-x-2 text-gray-400">
          <span>sports</span>
          <span>Trending</span>
        </div>
        <div>
          <h2 className="text-lg">Java</h2>
          <span className="text-xs text-gray-400">20k Tweets</span>
        </div>
      </div>
      <div className="h-full flex items-center">
        <ThreeDots />
      </div>
    </div>
  );
};

export default TrendCard;

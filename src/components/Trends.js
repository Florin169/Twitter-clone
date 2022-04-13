import React from "react";
import TrendCard from "./TrendCard";
import Widget from "./Widget";

const Trends = () => {
  return (
    <div className="hidden 2xl:block flex-grow text-white ml-[1100px] fixed top-3">
      <Widget />
      <div className="bg-[#1E2732] max-w-[400px] h-full rounded-2xl">
        <h1 className="font-bold text-2xl py-3 px-4">Trends for you</h1>
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
      </div>
    </div>
  );
};

export default Trends;

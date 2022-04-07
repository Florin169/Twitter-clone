import React from "react";

const Category = ({ text, Icon }) => {
  return (
    <div className="flex icon w-full space-x-4 justify-start cursor-pointer ">
      <Icon size={30} />
      <h1 className="hidden xl:inline-block text-xl">{text}</h1>
    </div>
  );
};

export default Category;

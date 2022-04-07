import React from "react";
import {
  Twitter,
  House,
  Hash,
  Bell,
  Envelope,
  Bookmark,
  CardList,
  Person,
  ThreeDots,
} from "react-bootstrap-icons";
import Category from "./Category";

const Sidebar = () => {
  return (
    <div className="hidden fixed sm:flex sm:flex-col sm:items-center  w-[114px] lg:w-[315px] lg:pl-56 xl:w-[480px] h-full   xl:pl-56 py-5 text-white ">
      <div>
        <Twitter size={30} className="mb-5 xl:ml-4" />
        <Category text={"Home"} Icon={House} />
        <Category text={"Explore"} Icon={Hash} />
        <Category text={"Notifications"} Icon={Bell} />
        <Category text={"Messages"} Icon={Envelope} />
        <Category text={"Bookmarks"} Icon={Bookmark} />
        <Category text={"List"} Icon={CardList} />
        <Category text={"Profile"} Icon={Person} />
        <Category text={"More"} Icon={ThreeDots} />
      </div>
      <button className="hidden xl:block  w-56 h-14 rounded-full font-bold text-lg bg-blue-500">
        Tweet
      </button>
      <div className="icon mt-auto flex items-center justify-between w-[80%] cursor-pointer sm:ml-12">
        <div className="flex  space-x-2">
          <div className="w-11 h-11 rounded-full bg-violet-400 "></div>
          <div className="hidden xl:block">
            <p>Name</p>
            <p>@name</p>
          </div>
        </div>
        <ThreeDots className="hidden xl:block cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { FaAngleDown, FaBell, FaSearch } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

type Props = {};

const Navabar = (props: Props) => {
  return (
    <nav className="flex gap-4 items-center justify-between">
      {/* search */}
      <div className="search relative max-w-[300px] w-full">
        <input
          type="text"
          placeholder="Search"
          className="border-2 border-slate-200 w-full pl-4 pr-10 rounded-md h-10"
        />
        <button className="flex items-center justify-center absolute top-0 right-0 h-10 w-10">
          <FaSearch className="text-slate-400" />
        </button>
      </div>

      {/* other options */}
      <div className="profile-nav flex md:gap-8 gap-4">
        <button className="profile-button text-slate-500 text-xl">
          <FaBell />
        </button>
        <button className="profile-button text-slate-500 text-xl">
          <MdMessage />
        </button>

        {/* profile */}
        <div className="profile flex items-center gap-2 cursor-pointer">
          <img
            src="https://github.com/shadcn.png"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
          <h4 className="text-lg md:block hidden">John Doe</h4>
          <FaAngleDown />
        </div>
      </div>
    </nav>
  );
};

export default Navabar;

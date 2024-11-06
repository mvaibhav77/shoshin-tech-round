import React from "react";
import { FaAngleDown, FaBell, FaSearch } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

// Search Component
const Search = () => {
  return (
    <div className="search relative max-w-[300px] w-full" data-testid="search">
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-slate-200 w-full pl-4 pr-10 rounded-md h-10"
        data-testid="search-input"
      />
      <button
        className="flex items-center justify-center absolute top-0 right-0 h-10 w-10"
        data-testid="search-button"
      >
        <FaSearch className="text-slate-400" />
      </button>
    </div>
  );
};

// Notification Icon Component
const NotificationIcon = () => {
  return (
    <button
      className="profile-button text-slate-500 text-xl"
      data-testid="notification-icon"
    >
      <FaBell />
    </button>
  );
};

// Message Icon Component
const MessageIcon = () => {
  return (
    <button
      className="profile-button text-slate-500 text-xl"
      data-testid="message-icon"
    >
      <MdMessage />
    </button>
  );
};

// Profile Section Component
const Profile = () => {
  return (
    <div
      className="profile flex items-center gap-2 cursor-pointer"
      data-testid="profile-section"
    >
      <img
        src="https://github.com/shadcn.png"
        alt="Profile"
        className="h-8 w-8 rounded-full"
        data-testid="profile-image"
      />
      <h4 className="text-lg md:block hidden" data-testid="profile-name">
        John Doe
      </h4>
      <FaAngleDown data-testid="dropdown-icon" />
    </div>
  );
};

// Main Navbar Component
const Navbar = () => {
  return (
    <nav className="flex gap-4 items-center justify-between">
      <Search />
      <div className="profile-nav flex md:gap-8 gap-4">
        <NotificationIcon />
        <MessageIcon />
        <Profile />
      </div>
    </nav>
  );
};

export default Navbar;

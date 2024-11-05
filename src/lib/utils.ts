import React from "react";
import {
  MdDashboard,
  MdPersonAddAlt1,
  MdGroups,
  MdOutlineGroupWork,
  MdSettings,
} from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

interface MenuItems {
  logo: React.ReactNode;
  title: string;
  link: string;
}

export const MAIN_MENU_ITEMS: MenuItems[] = [
  { logo: React.createElement(MdDashboard), title: "Dashboard", link: "/" },
  {
    logo: React.createElement(MdPersonAddAlt1),
    title: "Recruitment",
    link: "/",
  },
  { logo: React.createElement(FaCalendarDay), title: "Schedule", link: "/" },
  { logo: React.createElement(MdGroups), title: "Employee", link: "/" },
  {
    logo: React.createElement(MdOutlineGroupWork),
    title: "Department",
    link: "/",
  },
];

export const OTHER_MENU_ITEMS: MenuItems[] = [
  { logo: React.createElement(BiSupport), title: "Support", link: "/" },
  { logo: React.createElement(MdSettings), title: "Settings", link: "/" },
];

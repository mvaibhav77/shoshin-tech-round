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

export const SMALL_CARDS = [
  {
    title: "Available Position",
    subtitle: "Urgently Needed",
    total: 24,
    color: "#FFEFE7",
    urgent: 4,
    textColor: "#FF5151",
  },
  {
    title: "Job Open",
    subtitle: "Active Hiring",
    total: 240,
    color: "#E8F0FB",
    urgent: 4,
    textColor: "#3786F1",
  },
  {
    title: "New Employees",
    subtitle: "Department",
    total: 24,
    color: "#FDEBF9",
    urgent: 4,
    textColor: "#EE61CF",
  },
];

export const BIG_CARDS = [
  {
    title: "Total Employees",
    total: 240,
    men: 120,
    women: 96,
    image: "/images/employees.png",
    change: 2,
  },
  {
    title: "Talent Request",
    total: 16,
    men: 6,
    women: 10,
    image: "/images/requests.png",
    change: 5,
  },
];

export const ANNOUNCEMENTS = [
  {
    title: "Outing schedu;e for every department",
    date: "2024-02-12T00:00:00.000Z",
  },
  {
    title: "New Employee Onboarding",
    date: "2024-10-26T00:00:00.000Z",
  },
];

export const PRIORITY_SCHEDULE = [
  {
    title: "Review cadidate applications",
    date: "2024-02-12T00:00:00.000Z",
  },
];

export const OTHER_SCHEDULE = [
  {
    title: "Interview with candidate",
    date: "2024-02-12T00:00:00.000Z",
  },
  {
    title: "Short meeting with the team",
    date: "2024-10-26T00:00:00.000Z",
  },
];

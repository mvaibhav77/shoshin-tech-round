"use client";

import { MAIN_MENU_ITEMS, OTHER_MENU_ITEMS } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";

type Props = {};

const Sidebar = (props: Props) => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div className="flex flex-col gap-8 items-center p-4 border-r-2 md:w-[240px] w-[90px] h-[100dvh] border-slate-400">
      {/* header */}
      <div className="flex items-center gap-2 h-fit">
        <Image
          src={"/images/logo.svg"}
          height={1}
          width={1}
          alt="Logo"
          className="h-10 w-10"
        />
        <h1 className="text-3xl font-bold text-primary md:block hidden">
          Vasitum
        </h1>
      </div>

      {/* main menu */}
      <div className="main-menu flex flex-col md:items-start  items-center gap-2 w-full md:px-2">
        {/* menu heading */}
        <h4 className="text-slate-500 md:text-xs text-[9px]">MAIN MENU</h4>

        {/* menu items */}
        <div className="flex flex-col">
          {MAIN_MENU_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={clsx(
                "flex flex-row md:gap-6 gap-0 items-center py-2 text-lg hover:text-secondary",
                item.title === activeMenu ? "text-secondary" : "text-slate-500"
              )}
              onClick={() => setActiveMenu(item.title)}
            >
              {/* Logo */}
              <div className="logo text-2xl">{item.logo}</div>
              {/* text */}
              <h5 className="md:block hidden">{item.title}</h5>
            </Link>
          ))}
        </div>
      </div>

      {/* footer menu */}
      <div className="other-menu flex flex-col md:items-start  items-center gap-2 w-full md:px-2">
        {/* menu heading */}
        <h4 className="text-slate-500 md:text-xs text-[9px]">OTHER</h4>

        {/* other items */}
        <div className="flex flex-col">
          {OTHER_MENU_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={clsx(
                "flex flex-row md:gap-6 gap-0 items-center py-2 text-lg hover:text-secondary",
                item.title === activeMenu ? "text-secondary" : "text-slate-500"
              )}
              onClick={() => setActiveMenu(item.title)}
            >
              {/* Logo */}
              <div className="logo text-2xl">{item.logo}</div>
              {/* text */}
              <h5 className="md:block hidden">{item.title}</h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

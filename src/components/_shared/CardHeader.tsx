import React from "react";
import { FaAngleDown } from "react-icons/fa";

type Props = {
  title: string;
  date?: string;
};

const CardHeader = (props: Props) => (
  <div className="flex justify-between items-center w-full">
    {/* title */}
    <h2 className="text-xl">{props.title}</h2>
    {/* date Selector */}
    <button className="flex items-center gap-2 text-slate-600 text-sm border-[1px] border-slate-400 py-[6px] px-4 rounded-md">
      {new Date().toLocaleDateString("en-In", {
        weekday: "long",
        day: "numeric",
        month: "short",
      })}
      <FaAngleDown />
    </button>
  </div>
);

export default CardHeader;

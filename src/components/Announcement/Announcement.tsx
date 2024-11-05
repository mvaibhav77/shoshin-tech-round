import React from "react";
import CardHeader from "../_shared/CardHeader";
import { ANNOUNCEMENTS } from "@/lib/utils";

const Announcement = () => {
  return (
    <div className="p-4 flex flex-col items-center border-[1px] border-slate-400 rounded-lg h-full">
      {/* card header */}
      <CardHeader title="Announcement" />

      {/* announcements */}
      <div className="flex flex-col gap-4 w-full mt-4 h-full overflow-auto">
        {ANNOUNCEMENTS.map((announcement, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-4 border-[1px] border-slate-400 rounded-md"
          >
            <h2 className="text-lg">{announcement.title}</h2>
            <p className="text-sm text-slate-600">{announcement.date}</p>
          </div>
        ))}
      </div>

      {/* see all button */}
      <button className="mt-4 text-sm text-secondary hover:text-slate-950 w-fit">
        See all announcements
      </button>
    </div>
  );
};

export default Announcement;

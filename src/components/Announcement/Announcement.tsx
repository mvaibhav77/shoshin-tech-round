import React from "react";
import CardHeader from "../_shared/CardHeader";
import { ANNOUNCEMENTS } from "@/lib/utils";
import { MdPushPin } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const Announcement = () => {
  return (
    <div className="p-4 flex flex-col items-center border-[1px] border-slate-300 rounded-lg h-full">
      {/* card header */}
      <CardHeader title="Announcement" />

      {/* announcements */}
      <div className="flex flex-col gap-2 w-full mt-4 h-full overflow-auto">
        {ANNOUNCEMENTS.map((announcement, index) => (
          <div
            key={index}
            className="flex gap-2 justify-between p-4 bg-slate-100 border-[1px] border-slate-300 rounded-md"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-lg">{announcement.title}</h2>
              <p className="text-sm text-slate-600">2 h ago</p>
            </div>

            <div className="action-buttons flex gap-6">
              <MdPushPin className="text-slate-500 text-2xl" />
              <BsThreeDots className="text-slate-500 text-2xl" />
            </div>
          </div>
        ))}
      </div>

      {/* see all button */}
      <button className="mt-4 font-semibold text-secondary hover:text-slate-950 w-fit">
        See all announcements
      </button>
    </div>
  );
};

export default Announcement;

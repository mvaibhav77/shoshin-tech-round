import React from "react";
import CardHeader from "../_shared/CardHeader";
import { OTHER_SCHEDULE, PRIORITY_SCHEDULE } from "@/lib/utils";
import { BsThreeDots } from "react-icons/bs";

type Props = {};

const ScheduleCard = (props: Props) => {
  return (
    <div className="p-4 flex flex-col border-[1px] border-slate-300 rounded-lg overflow-auto">
      {/* card header */}
      <CardHeader title="Upcoming Schedules" />

      <div className="flex flex-col gap-1 overflow-auto">
        {/* prirority schuedule */}
        <div className="main-menu mt-4 flex flex-col gap-1 w-full">
          {/* menu heading */}
          <h4 className="text-slate-500 text-sm text-[9px]">Priority</h4>
          <div className="flex flex-col gap-4 w-full mt-2 h-full overflow-auto">
            {PRIORITY_SCHEDULE.map((schedule, index) => (
              <div
                key={index}
                className="flex gap-2 justify-between p-2 px-4 border-[1px] border-slate-400 rounded-md"
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg">{schedule.title}</h2>
                  <p className="text-sm text-slate-600">2 h ago</p>
                </div>

                <div className="action-buttons flex gap-6">
                  <BsThreeDots className="text-slate-500 text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* other schuedule */}
        <div className="main-menu mt-4 flex flex-col gap-1 w-full">
          {/* menu heading */}
          <h4 className="text-slate-500 text-sm text-[9px]">Other</h4>
          <div className="flex flex-col gap-4 w-full mt-2 h-full overflow-auto">
            {OTHER_SCHEDULE.map((schedule, index) => (
              <div
                key={index}
                className="flex gap-2 justify-between p-2 px-4 border-[1px] border-slate-400 rounded-md"
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg">{schedule.title}</h2>
                  <p className="text-sm text-slate-600">2 h ago</p>
                </div>

                <div className="action-buttons flex gap-6">
                  <BsThreeDots className="text-slate-500 text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* create schedule button */}
      <button className="mt-4 self-center font-semibold text-secondary hover:text-slate-950 w-fit">
        Create a schedule
      </button>
    </div>
  );
};

export default ScheduleCard;

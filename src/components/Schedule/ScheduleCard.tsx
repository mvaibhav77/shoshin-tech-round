import React from "react";
import CardHeader from "../_shared/CardHeader";

type Props = {};

const ScheduleCard = (props: Props) => {
  return (
    <div className="p-4 grow flex flex-col items-center border-[1px] border-slate-400 rounded-lg h-full">
      {/* card header */}
      <CardHeader title="Upcoming Schedules" />

      <div className="flex flex-col gap-4"></div>
    </div>
  );
};

export default ScheduleCard;

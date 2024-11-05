import React from "react";

type Props = {};

const ActivityCard = (props: Props) => {
  return (
    <div className="flex flex-col text-white border-[1px] bg-blue-card  border-slate-300 rounded-lg grow">
      {/* card header */}
      <h2 className="text-lg bg-card p-4 w-full rounded-lg font-bold border-b-[1px] border-slate-700">
        Recent Activity
      </h2>

      <div className="card-body py-6 px-8 flex flex-col gap-6">
        {/* activity */}
        <div className="flex flex-col gap-2 w-5/6">
          {/* date */}
          <div className="date font-semibold text-slate-400 text-sm">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          {/* title */}
          <h3 className="text-2xl">You posted a New Job</h3>

          {/* description */}
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>

        {/* action button */}
        <div className="flex justify-between items-center">
          <p className="text-lg">Today you make 12 activity</p>
          <button className="bg-secondary p-3 rounded-md text-white font-bold">
            See all Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;

import { BIG_CARDS, SMALL_CARDS } from "@/lib/utils";
import React from "react";
import BigCards from "../BigCards/BigCards";
import SmallCard from "../SmallCard/SmallCard";
import Announcement from "../Announcement/Announcement";
import ScheduleCard from "../Schedule/ScheduleCard";
import ActivityCard from "../ActivityCard/ActivityCard";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="main flex flex-col gap-6 mt-6 h-full ">
      {/* page header */}
      <div className="page-header flex items-center justify-between">
        <h1 className="text-2xl">Dashboard</h1>
      </div>

      <div className="grid md:grid-cols-5 gap-6 grid-cols-1 h-full">
        {/* col1 */}
        <div className="flex md:col-span-3 flex-col gap-4 h-full">
          {/* small cards */}
          <div className="flex gap-4">
            {SMALL_CARDS.map((card, index) => (
              <SmallCard key={index} card={card} />
            ))}
          </div>

          {/* big cards */}
          <div className="flex gap-4">
            {BIG_CARDS.map((card, index) => (
              <BigCards key={index} card={card} />
            ))}
          </div>

          {/* anouncement  */}
          <Announcement />
        </div>

        {/* cols2 */}
        <div className="flex md:col-span-2 flex-col gap-4">
          {/* recent activity */}
          <ActivityCard />

          {/* upcoming schedule */}
          <ScheduleCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";

import sidebarData from "@/constants/upcomingCalendarData.json";
import { sortAndGroupByDate } from "@/functions/dashboardFunctions";
import DateSection from "./DateSection";

function RightSidebar() {
  const sortedData = sortAndGroupByDate(sidebarData);
  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <p className="text-2xl text-slate-600 font-bold">Upcoming</p>
        <button className="text-slate-600 text-xs bg-slate-200 rounded-full px-3 py-1.5 font-bold">See all</button>
      </div>
      {sortedData?.map((data, idx) => (
        <DateSection key={idx} data={data} />
      ))}
    </div>
  );
}

export default RightSidebar;

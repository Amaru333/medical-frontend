import React from "react";
import DashboardHeader from "../../common/DashboardHeader";
import LatestPost from "./LatestPost";
import MyCalendar from "./MyCalendar";
import RightSidebar from "./RightSidebar";

function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-x-12">
      <div className="col-span-9 pt-12 pl-16 pr-4">
        <DashboardHeader title="Calendar" />
        <LatestPost />
        <MyCalendar />
      </div>
      <div className="col-span-3 px-12 pt-12 bg-gradient-to-b from-white to-blue-700/10 min-h-screen">
        <RightSidebar />
      </div>
    </div>
  );
}

export default Dashboard;

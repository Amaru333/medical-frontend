import React, { useState } from "react";
import TimestampSelector from "./TimestampSelector";
import TimelineSelector from "./TimelineSelector";

import timelineData from "@/constants/timelineData.json";

import { IoAdd } from "react-icons/io5";
import RenderCalendar from "./RenderCalendar";

function MyCalendar() {
  const [selectedTimeline, setSelectedTimeline] = useState(timelineData[0]);
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center">
        <button className="flex items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded-full">
          <p>Create New</p>
          <IoAdd />
        </button>
        <TimestampSelector />
        <TimelineSelector selectedTimeline={selectedTimeline} setSelectedTimeline={setSelectedTimeline} timelines={timelineData} />
      </div>
      <div>
        <RenderCalendar />
      </div>
    </div>
  );
}

export default MyCalendar;

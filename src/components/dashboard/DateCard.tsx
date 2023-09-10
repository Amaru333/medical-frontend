import { getDateAndDay } from "@/functions/dashboardFunctions";
import { IDateCardProps } from "@/interfaces/dashboardInterfaces";
import React from "react";

function DateCard({ timestamp }: IDateCardProps) {
  const { date, day } = getDateAndDay(timestamp);
  return (
    <div className="flex flex-col items-center bg-slate-200 rounded-xl py-4">
      <p className="text-sm text-gray-400 font-bold">{day}</p>
      <p className="font-bold text-slate-600">{date}</p>
    </div>
  );
}

export default DateCard;

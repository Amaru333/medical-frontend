import { getDateByString } from "@/functions/dashboardFunctions";
import { IDateSectionProps } from "@/interfaces/dashboardInterfaces";
import React from "react";
import EventCard from "./EventCard";

function DateSection({ data }: IDateSectionProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-2">
        <p className="text-lg text-slate-600 font-bold">{getDateByString(data?.date)}</p>
        <p className="bg-slate-200 text-slate-500 px-4 text-sm font-bold ml-4 rounded-full">{data?.data?.length}</p>
      </div>
      {data?.data?.map((event, idx) => (
        <EventCard key={idx} data={event} />
      ))}
    </div>
  );
}

export default DateSection;

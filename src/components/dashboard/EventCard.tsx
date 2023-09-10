import React from "react";

import { IEventCardProps } from "@/interfaces/dashboardInterfaces";
import { convertTimestampToTime } from "@/functions/dashboardFunctions";

import { FiChevronRight } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";

function EventCard({ data }: IEventCardProps) {
  return (
    <div className="shadow-lg bg-white rounded-xl p-3 mb-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-slate-600 font-bold line-clamp-1 mb-1.5">{data?.title}</p>
        <FiChevronRight />
      </div>
      <div className="mb-3 text-slate-400 flex items-center gap-x-1 text-xs font-semibold">
        <BiTimeFive />
        <p>
          {convertTimestampToTime(data?.start_time)} - {convertTimestampToTime(data?.end_time)}
        </p>
      </div>
      <p className="text-xs line-clamp-2 font-medium text-slate-500">{data?.description}</p>
      {data?.links?.length > 0 && (
        <div className="flex flex-col text-xs">
          {data?.links?.map((link, idx) => (
            <div className="mt-1 text-blue-600 underline" key={idx}>
              <a href={link} target="_blank" className="line-clamp-1">
                {link}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EventCard;

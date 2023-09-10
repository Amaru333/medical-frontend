import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DateCard from "./DateCard";
import sidebarData from "@/constants/upcomingCalendarData.json";
import {
  convertTimestampToTime,
  formatDuration,
  formatTimeDifference,
  getDateByString,
  getFilteredRowEventData,
  getHoursAsDecimal,
  getNumberOfHours,
  getOverlappingCardIndex,
  sortAndGroupByDate,
} from "@/functions/dashboardFunctions";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/shad-components/ui/hover-card";
import { IEventData } from "@/interfaces/dashboardInterfaces";
import OutsideListener from "@/common/OutsideListener";

import { BiSolidTimeFive, BiTimeFive } from "react-icons/bi";
import { AiOutlineClose, AiOutlinePlus, AiFillCalendar, AiOutlineCalendar } from "react-icons/ai";
import { IoCopy } from "react-icons/io5";
import moment from "moment";

function RenderCalendar() {
  const [selectedCard, setSelectedCard] = useState<null | IEventData>(null);
  const sortedData = sortAndGroupByDate(sidebarData);
  const weeklyTimestamp = Array.from({ length: 7 }, (_, i) => moment().add(i, "days").format("YYYY-MM-DDTHH:mm:ss.SSSZ"));
  return (
    <div className="p-6 rounded-2xl shadow-xl mt-8">
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="bg-black/50 fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center z-[1500]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <OutsideListener func={() => setSelectedCard(null)}>
              <motion.div className="bg-white rounded-xl p-6 max-w-[60vw]" layoutId={selectedCard?.id}>
                <div className="flex items-center justify-end">
                  <button onClick={() => setSelectedCard(null)}>
                    <AiOutlineClose />
                  </button>
                </div>
                <p className="text-2xl line-clamp-1 font-bold text-slate-600 mb-2">{selectedCard?.title}</p>
                <p className="text-slate-600">{selectedCard?.description}</p>
                <div className="mb-3 text-slate-600 flex flex-col text-sm font-semibold mt-4">
                  <div className="flex items-center gap-x-1">
                    <AiOutlineCalendar />
                    <p>{getDateByString(selectedCard?.start_time)}</p>
                  </div>
                  <div className="flex gap-x-1 items-center mt-1">
                    <BiTimeFive />
                    <p>
                      {convertTimestampToTime(selectedCard?.start_time)} - {convertTimestampToTime(selectedCard?.end_time)} ({formatDuration(selectedCard?.start_time, selectedCard?.end_time)})
                    </p>
                  </div>
                </div>
                <p className={`text-sm font-semibold`}>{formatTimeDifference(selectedCard?.start_time, selectedCard?.end_time)}</p>
                <div className="flex gap-x-3 mt-6">
                  <button className="flex items-center px-4 py-2 rounded-xl gap-x-2 bg-blue-600 text-white">
                    <AiOutlinePlus />
                    Join Meeting
                  </button>
                  <button className="flex items-center px-4 py-2 rounded-xl gap-x-2 border border-blue-600 text-blue-600">
                    <IoCopy />
                    Copy Link
                  </button>
                </div>
              </motion.div>
            </OutsideListener>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="grid grid-cols-8 gap-x-3">
        <div></div>
        {weeklyTimestamp.map((timestamp, idx) => {
          return <DateCard key={idx} timestamp={timestamp} />;
        })}
      </div>
      <div className="grid grid-cols-8 gap-x-3 mt-4">
        <div className="flex flex-col bg-slate-200 rounded-xl py-3">
          {Array(24)
            .fill(" ")
            .map((_, idx) => (
              <p key={idx} className="text-center py-3 text-sm font-bold text-slate-600">
                {idx.toString().padStart(2, "0")}:00
              </p>
            ))}
        </div>
        {weeklyTimestamp.map((timestamp, idx) => {
          const currentIterationData = getFilteredRowEventData(timestamp, sortedData);
          return (
            <div className="relative" key={idx}>
              {currentIterationData?.data?.map((data, index) => {
                // console.log(data, "DATA---------");
                const timeDiff = getNumberOfHours(data?.start_time, data?.end_time);
                const startTimeDecimal = getHoursAsDecimal(data?.start_time);
                const extraMargin = getOverlappingCardIndex(currentIterationData?.data, index, 10);
                console.log(extraMargin);
                // console.log(startTimeDecimal);
                return (
                  <HoverCard openDelay={0} closeDelay={0} key={index}>
                    <HoverCardTrigger asChild>
                      <motion.button
                        layoutId={data?.id}
                        onClick={() => setSelectedCard(data)}
                        whileHover={{ zIndex: 999, scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        className="p-2 h-11 absolute w-full rounded-lg shadow-md border border-black/5 text-start flex flex-col"
                        key={index}
                        style={{ backgroundColor: data.color, height: 44 * (timeDiff < 1 ? 1 : timeDiff) + "px", left: 0, top: 44 * startTimeDecimal + extraMargin * 15 + "px", zIndex: index + 1 }}
                      >
                        <p className="text-xs line-clamp-1 font-bold text-slate-600">{data?.title}</p>
                        {timeDiff > 1 && <p className="text-[10px] line-clamp-2 text-slate-600">{data?.description}</p>}
                      </motion.button>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-black text-white max-w-80">
                      <div>
                        <p className="text-xs line-clamp-1 font-bold">{data?.title}</p>
                        <p className="text-[10px] line-clamp-2">{data?.description}</p>
                        <div className="flex gap-x-4 mt-4">
                          <div className="flex gap-x-1 items-center">
                            <AiFillCalendar size="10" />
                            <p className="text-[10px]">{getDateByString(data?.start_time)}</p>
                          </div>
                          <div className="flex gap-x-1 items-center">
                            <BiSolidTimeFive size="10" />
                            <p className="text-[10px]">
                              {convertTimestampToTime(data?.start_time)} - {convertTimestampToTime(data?.end_time)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RenderCalendar;

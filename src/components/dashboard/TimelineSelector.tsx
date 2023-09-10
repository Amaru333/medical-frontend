import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OutsideListener from "@/common/OutsideListener";
import { ITimelineSelectorProps } from "@/interfaces/dashboardInterfaces";

import { FiChevronDown } from "react-icons/fi";

function TimelineSelector({ selectedTimeline, setSelectedTimeline, timelines }: ITimelineSelectorProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <OutsideListener func={() => setIsDropdownOpen(false)}>
      <div className="relative">
        <button className="flex items-center border border-slate-200 px-4 py-2 rounded-full" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <p className="font-bold text-slate-600 w-28 text-start text-sm">{selectedTimeline?.name}</p>
          <motion.div className="arrow" style={{ transformOrigin: "50% 55%" }} initial={{ rotate: 0 }} animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
            <FiChevronDown />
          </motion.div>
        </button>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              className="absolute bg-white top-[38px] left-0 flex flex-col w-full rounded shadow-md border origin-top"
              key="dropdown-timmelineselector"
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: 1,
              }}
              exit={{
                scaleY: 0,
              }}
            >
              {timelines?.map((timeline, idx) => (
                <button
                  className={`text-start text-sm py-1 px-4 rounded transition-all ${
                    selectedTimeline.value == timeline.value ? "bg-blue-600 text-white hover:bg-blue-600" : "bg-transparent text-black hover:bg-blue-600/20"
                  }`}
                  key={idx}
                  onClick={() => {
                    setSelectedTimeline(timeline);
                    setIsDropdownOpen(false);
                  }}
                >
                  {timeline.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </OutsideListener>
  );
}

export default TimelineSelector;

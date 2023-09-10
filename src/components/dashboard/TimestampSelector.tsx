import React from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function TimestampSelector() {
  return (
    <div className="flex flex-row items-center gap-x-4">
      <button>
        <FiChevronLeft />
      </button>
      <p className="font-bold text-slate-600">September 2023</p>
      <button>
        <FiChevronRight />
      </button>
    </div>
  );
}

export default TimestampSelector;

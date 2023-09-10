import React from "react";

import doctorsList from "@/constants/doctorsList.json";
import DoctorCard from "./DoctorCard";

function AllDoctors() {
  return (
    <div className="mt-10 mb-4">
      <div className="flex gap-x-3 items-center">
        <p className="text-2xl text-slate-600 font-bold">All Doctors</p>
        <p className="text-slate-600 text-xs bg-slate-200 rounded-full px-3 py-1.5 font-bold">{doctorsList?.length}</p>
      </div>
      <div className="grid grid-cols-4 gap-y-12 gap-x-8 mt-8">
        {doctorsList?.map((doctor, index) => (
          <DoctorCard key={index} data={doctor} />
        ))}
      </div>
    </div>
  );
}

export default AllDoctors;

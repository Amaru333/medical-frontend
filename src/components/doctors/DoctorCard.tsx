import { IDoctorCardProps } from "@/interfaces/doctorsInterfaces";
import React from "react";

import { AiFillStar } from "react-icons/ai";
import { GoPeople } from "react-icons/go";

function DoctorCard({ data }: IDoctorCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md w-fit p-2">
      <div className="relative">
        <img src={data?.image} className="aspect-square rounded-xl" />
        <p className="absolute -bottom-3 left-3 bg-blue-200 text-blue-600 border border-blue-600 rounded-full text-xs font-semibold px-4 py-1">{data?.specialization}</p>
      </div>
      <p className="mt-5 mb-1 font-bold">{data?.name}</p>
      <p className="text-sm text-slate-400">{data?.hospital}</p>
      <div className="flex items-center gap-x-8 text-sm py-1">
        <div className="flex items-center gap-x-1.5">
          <AiFillStar className="text-yellow-400" />
          <p className="font-semibold">{data?.ratings}</p>
        </div>
        <div className="flex items-center gap-x-1.5">
          <GoPeople className="text-slate-600" />
          <p className="font-semibold">{data?.number_of_ratings}</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;

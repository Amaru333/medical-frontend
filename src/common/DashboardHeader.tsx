import { getUserDetails } from "@/redux/slices/userSlice";
import React from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";

interface IDashboardHeaderProps {
  title: string;
}
function DashboardHeader({ title }: IDashboardHeaderProps) {
  const userDetails = useSelector(getUserDetails);
  return (
    <div className="flex items-center justify-between">
      <p className="text-4xl text-slate-600 font-bold">{title}</p>
      <div className="flex gap-x-4">
        <button className="border border-gray-300 rounded-full p-2">
          <AiOutlineSearch size="20" />
        </button>
        <button className="border border-gray-300 rounded-full p-2 relative">
          <div className="w-2 h-2 bg-red-500 animate-ping rounded-full absolute top-0 right-0" />
          <div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0" />
          <IoIosNotificationsOutline size="20" />
        </button>
        <img src={userDetails?.image} className="w-[38px] h-[38px] rounded-full" />
      </div>
    </div>
  );
}

export default DashboardHeader;

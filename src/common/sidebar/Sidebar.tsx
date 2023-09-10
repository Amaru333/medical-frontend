import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { GoChevronRight } from "react-icons/go";
import { FaUserDoctor } from "react-icons/fa6";

function Sidebar() {
  const router = useRouter();
  const sidebarItems = [
    {
      name: "Home",
      link: "/",
      icon: BiHomeAlt,
    },
    {
      name: "Calendar",
      link: "/dashboard",
      icon: AiOutlineCalendar,
    },
    {
      name: "Doctors",
      link: "/doctors",
      icon: FaUserDoctor,
    },
  ];
  return (
    <motion.div className="bg-blue-700/10 h-screen flex flex-col px-6 py-12 sticky top-0 left-0">
      <div className="flex items-center">
        <img src="/logo-transparent.png" className="w-12" />
        {/* <button className="bg-blue-500/30 p-3 rounded-xl ml-4">
          <GoChevronRight color="black" />
        </button> */}
      </div>
      <div className="flex flex-col flex-1 pt-12">
        {sidebarItems?.map((item, index) => (
          <button className={`p-3 my-2 w-fit rounded-full ${router.pathname == item.link ? "bg-blue-500/30" : "bg-transparent"}`} key={index} onClick={() => router.push(item.link)}>
            {item.icon({ size: "20", strokeWidth: "0", className: `${router.pathname == item.link ? "text-black" : "text-gray-700/80"}` })}
          </button>
        ))}
      </div>
      <div>
        <button className="p-3 my-2 w-fit rounded-full text-red-500">
          <CiLogout size="20" strokeWidth="1" />
        </button>
      </div>
    </motion.div>
  );
}

export default Sidebar;

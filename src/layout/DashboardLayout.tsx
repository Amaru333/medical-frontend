import Sidebar from "@/common/sidebar/Sidebar";
import React from "react";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: IDashboardLayoutProps) {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default DashboardLayout;

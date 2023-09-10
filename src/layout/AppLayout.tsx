import React from "react";
import { useRouter } from "next/router";
import DashboardLayout from "./DashboardLayout";

interface IAppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: IAppLayoutProps) {
  const router = useRouter();

  const dashboardRoute = ["/dashboard", "/doctors"];
  if (dashboardRoute.includes(router.pathname)) {
    return <DashboardLayout>{children}</DashboardLayout>;
  } else {
    return <div>{children}</div>;
  }
}

export default AppLayout;

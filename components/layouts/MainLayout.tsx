import React from "react";
import { layoutType } from "./layoutType";
import DashNav from "./DashNav";
import SideBar from "./SideBar";

const MainLayout = ({ children }: layoutType) => {
  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#EEF2F7] ">
        <DashNav />
        {children}
      </div>
      <SideBar />
    </div>
  );
};

export default MainLayout;

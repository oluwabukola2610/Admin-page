"use client";
import { Tabs, TabsProps } from "antd";
import UserTable from "./UserTable";

const User = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Active Users",
      children: <UserTable />,
    },
    {
      key: "2",
      label: "InActive Users",
      children: <UserTable />,
    },
  ];

  return (
    <main className="mx-auto  flex flex-col  p-3 h-screen overflow-y-scroll">
      <span className="flex flex-col">
        <h4 className="text-[32px] font-[700] text-[#2E2C34]">Users</h4>
        <p className="text-[#84818A] text-[14px] font-[400]">List of Users </p>
      </span>
      <Tabs defaultActiveKey="1" items={items} />
  </main>
  );
};

export default User;

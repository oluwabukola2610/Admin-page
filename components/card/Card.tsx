"use client";
import { Tabs, TabsProps } from "antd";
import TableCard from "./TableCard";

const Card = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Virtual Card",
      children: <TableCard />,
    },
    {
      key: "2",
      label: "Physical Card",
      children: <TableCard />,
    },
    {
      key: "3",
      label: "Prepaid Card",
      children: <TableCard />,
    },
  ];

  return (
    <main className="mx-auto  flex flex-col  p-3 h-screen overflow-y-scroll">
      <span className="flex flex-col">
        <h4 className="text-[32px] font-[700] text-[#2E2C34]">Card</h4>
        <p className="text-[#84818A] text-[14px] font-[400]">
          List of account we have{" "}
        </p>
      </span>
      <Tabs defaultActiveKey="1" items={items} />
    </main>
  );
};

export default Card;

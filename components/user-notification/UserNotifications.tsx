"use client";
import React, { useEffect, useState } from "react";
import { CustomTable as Table } from "@/lib/AntDesignComponents";
import TableIcon from "@/assets/icon/TableIcon";
const UserNotifications = () => {
  const [notification, setNotification] = useState([]);
  const [loading, setLoading] = useState(true);

  const FetchData = async () => {
    setLoading(true);
    fetch("https://testapi.io/api/omobolaji1/notification")
      .then((response) => response.json())
      .then((data) => {
        setNotification(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  const columns = [
    {
      title: (
        <span className="flex items-center">
          <p>Promotion</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "promotion",
      key: "promotion",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Amount</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Status</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "status",
      key: "status",
      render: (status:string) =>
        status === "Active" && (
          <span className="p-[4%] rounded-[80px] bg-green-500 text-white text-center text-[14px] font-[600]">
            {status}
          </span>
        ),
    },

    {
      title: (
        <span className="flex items-center">
          <p>Action</p>
          <TableIcon className="ml-4" />
        </span>
      ),
      render: () => <span className="cursor-pointer">...</span>,
    },
  ];

  return (
    <main className="mx-auto flex flex-col p-4 h-screen overflow-y-scroll">
      <span className="flex flex-col">
        <h4 className="text-[32px] font-[700] text-[#2E2C34]">Notification</h4>
        <p className="text-[#84818A] text-[14px] font-[400]">
          Show all your notifications{" "}
        </p>
      </span>
      <div className="bg-white shadow-md p-2 mt-8 space-y-4">
        <div className="relative overflow-x-auto  sm:rounded-lg w-[22rem] md:w-full">
          <Table
            dataSource={notification}
            columns={columns}
            loading={loading}
          />
        </div>
      </div>
    </main>
  );
};

export default UserNotifications;

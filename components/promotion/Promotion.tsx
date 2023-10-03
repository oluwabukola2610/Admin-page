"use client";
import React, { useEffect, useState } from "react";
import { CustomTable as Table } from "@/lib/AntDesignComponents";
import TableIcon from "@/assets/icon/TableIcon";
import { Dropdown, Form, Menu, MenuProps } from "antd";
import PromotionDrawal from "./PromotionDrawal";
import CreateCondition from "./CreateCondition";
import CreatePromotion from "./CreatePromotion";
export interface promotionType {
  promotion: string;
  amount: number;
  status: string;
}
const Promotion = () => {
  const [PromotionData, setPromotionData] = useState<promotionType[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [createCondition, setcreateCondition] = useState(false);
  const [createPromotion, setCreatePromotion] = useState(false);

  const [selectedAccount, setSelectedAccount] = useState<promotionType | null>(
    null
  );

  const [form] = Form.useForm();

  const FetchData = async () => {
    setLoading(true);
    fetch("https://testapi.io/api/omobolaji1/notification")
      .then((response) => response.json())
      .then((data) => {
        setPromotionData(data);
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
      render: (status: string) =>
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
      dataIndex: "id",
      render: (_: any, record: promotionType) => {
        const menu: React.ReactElement<MenuProps> = (
          <Menu>
            <Menu.Item
              key="show-details"
              onClick={() => {
                setSelectedAccount(record);
                setOpen(true);
              }}
            >
              Show Details
            </Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={menu} trigger={["click"]}>
            <span className="cursor-pointer">...</span>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <main className="mx-auto flex flex-col p-4 h-screen overflow-y-scroll">
      <div className="flex justify-between items-center">
        <span className="flex flex-col">
          <h4 className="text-[32px] font-[700] text-[#2E2C34]">
            {" "}
            Bonus & Promotion
          </h4>
          <p className="text-[#84818A] text-[14px] font-[400]">
            Showing your all transaction{" "}
          </p>
        </span>
        <div className="space-x-2">
          <button
            onClick={() => {
              setCreatePromotion(true);
            }}
            className="btn  bg-blue-500 hover:bg-blue-500/70 text-white capitalize"
          >
            + Create Promotion
          </button>
          <button
            onClick={() => {
              setcreateCondition(true);
            }}
            className="btn  text-blue-500 hover:text-blue-500/70 bg-white capitalize"
          >
            + Create Condition
          </button>
          <button
            className="btn  text-blue-500 hover:bg-blue-500/70 t bg-white capitalize"
          >
            Promo Request
          </button>
        </div>
      </div>
      <div className="bg-white shadow-md p-2 mt-8 space-y-4">
        <div className="relative overflow-x-auto  sm:rounded-lg w-[22rem] md:w-full">
          <Table
            dataSource={PromotionData}
            columns={columns}
            loading={loading}
          />
        </div>
      </div>
      <PromotionDrawal
        Open={open}
        onClose={() => setOpen(false)}
        account={selectedAccount}
        title="Promotion"
      />
     <CreateCondition setcreateCondition={setcreateCondition} condition={createCondition} form={form}/>
     <CreatePromotion setCreatePromotion={setCreatePromotion} promotion={createPromotion} form={form}/>
    </main>
  );
};

export default Promotion;

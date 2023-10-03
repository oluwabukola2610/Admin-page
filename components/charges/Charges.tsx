"use client";
import React, { useEffect, useState } from "react";
import { CustomTable as Table } from "@/lib/AntDesignComponents";
import TableIcon from "@/assets/icon/TableIcon";
import {
  Button,
  Dropdown,
  Form,
  Input,
  Menu,
  MenuProps,
  Modal,
  Select,
} from "antd";
import TextArea from "antd/es/input/TextArea";

interface Chargesprops {
  vendor: string;
  type: string;
  amount: number;
  vat: string;
}
const Charges = () => {
  const [ChargesData, setChargesData] = useState<Chargesprops[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const FetchData = async () => {
    setLoading(true);
    fetch("https://testapi.io/api/omobolaji1/charges")
      .then((response) => response.json())
      .then((data) => {
        setChargesData(data);
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
          <p>Vendor Name</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "vendorName",
      key: "vendorName",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Type</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "type",
      key: "type",
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
          <p>Vat</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "vat",
      key: "vat",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Action</p>
          <TableIcon className="ml-4" />
        </span>
      ),
      dataIndex: "id",
      render: () => {
        const menu: React.ReactElement<MenuProps> = (
          <Menu>
            <Menu.Item
              key="show-details"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Modify/ edit
            </Menu.Item>
            <Menu.Item key="download-receipt" className="text-red-500">
              Delete
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
          <h4 className="text-[32px] font-[700] text-[#2E2C34]"> Charges</h4>
          <p className="text-[#84818A] text-[14px] font-[400]">
            Showing your account metrics{" "}
          </p>
        </span>
        <button className="btn  bg-blue-500 hover:bg-blue-500/70 text-white capitalize">
          + Create Charges
        </button>
      </div>

      <div className="bg-white shadow-md p-2 mt-8 space-y-4">
        <div className="relative overflow-x-auto  sm:rounded-lg w-[22rem] md:w-full">
          <Table dataSource={ChargesData} columns={columns} loading={loading} />
        </div>
        <Modal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
          centered={true}
        >
          <div>
            <div className="text-center">
              <h1 className="text-blue-500 text-2xl font-bold mb-3 ">
                Modify Charges
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                temporibus iste explicabo commodi! Quod cumque numquam nobis
                laborum, error eligendi.
              </p>
            </div>
            <Form layout="vertical" form={form}>
              <div className="w-full mb-3 flex flex-col items-start justify-start gap-[0.2rem]">
                <label
                  htmlFor="Vendor"
                  className="text-[#181336] text-[13px] font-[600]"
                >
                  Vendors Name{" "}
                </label>
                <Input
                  className="w-full authInput"
                  placeholder="This is a placeholder"
                  id="vendor"
                />
              </div>
              <div className="w-full mb-3 flex flex-col items-start justify-start gap-[0.2rem]">
                <label
                  htmlFor="amount"
                  className="text-[#181336] text-[13px] font-[600]"
                >
                  Amount{" "}
                </label>
                <Input
                  className="w-full authInput"
                  placeholder="This is a placeholder"
                  id="amount"
                />
              </div>
              <div className="w-full mb-3 flex flex-col items-start justify-start gap-[0.2rem]">
                <label
                  htmlFor="vat"
                  className="text-[#181336] text-[13px] font-[600]"
                >
                  VAT{" "}
                </label>
                <Input
                  className="w-full authInput"
                  placeholder="This is a placeholder"
                  id="vat"
                />
              </div>
                <button className="btn w-full bg-blue-500 hover:bg-blue-500/70 text-white capitalize">
                  Save Changes
                </button>
            </Form>
          </div>
        </Modal>
      </div>
    </main>
  );
};

export default Charges;

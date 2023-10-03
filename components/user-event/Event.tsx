"use client";
import React, { useEffect, useState } from "react";
import { CustomTable as Table } from "@/lib/AntDesignComponents";
import TableIcon from "@/assets/icon/TableIcon";
import { Dropdown, Form, Input, Menu, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

const Event = () => {
  const [EventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { Option } = Select;

  const FetchData = async () => {
    setLoading(true);
    fetch("https://testapi.io/api/omobolaji1/event")
      .then((response) => response.json())
      .then((data) => {
        setEventData(data);
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
          <p>Event Name</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "event",
      key: "event",
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
          <p>Time</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "Time",
      key: "Time",
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
        const menu = (
          <Menu>
            <Menu.Item key="show-details">Details</Menu.Item>
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
          <h4 className="text-[32px] font-[700] text-[#2E2C34]"> Event</h4>
          <p className="text-[#84818A] text-[14px] font-[400]">
            Showing your all transaction{" "}
          </p>
        </span>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="btn  bg-blue-500 hover:bg-blue-500/70 text-white capitalize"
        >
          + Add Event
        </button>
      </div>
      <div className="bg-white shadow-md p-2 mt-8 space-y-4">
        <div className="relative overflow-x-auto  sm:rounded-lg w-[22rem] md:w-full">
          <Table dataSource={EventData} columns={columns} loading={loading} />
        </div>
        <Modal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
          centered={true}
        >
          <div>
            <div className="text-center">
              <h1 className="text-blue-500 text-2xl font-bold mb-3">
                Add Events
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
                  htmlFor="title"
                  className="text-[#181336] text-[13px] font-[600]"
                >
                  Title{" "}
                </label>
                <Input
                  className="w-full authInput"
                  placeholder="This is a placeholder"
                  id="title"
                />
              </div>
              <div className="w-full mb-3 flex flex-col items-start justify-start gap-[0.2rem]">
                <label
                  htmlFor="host"
                  className="text-[#181336] text-[13px] font-[600]"
                >
                  Host{" "}
                </label>
                <Input
                  className="w-full authInput"
                  placeholder="This is a placeholder"
                  id="host"
                />
              </div>
              <div className="w-full mb-3 flex flex-col items-start justify-start gap-[0.2rem]">
                <label
                  htmlFor="host"
                  className="text-[#181336] text-[13px] font-[600]"
                >
                  Host page (optional)
                </label>
                <Input
                  className="w-full authInput"
                  placeholder="This is a placeholder"
                  id="host"
                />
              </div>
              <div className="w-full mb-3 flex flex-col items-start justify-start gap-[0.2rem]">
                <label
                  htmlFor="location"
                  className="text-[#181336] text-[13px] font-[600]"
                >
                  Location{" "}
                </label>
                <Input
                  className="w-full authInput"
                  placeholder="This is a placeholder"
                  id="location"
                />
              </div>
              <div className="w-full mb-3 flex flex-col items-start justify-start gap-[0.2rem]">
                <label
                  htmlFor="description"
                  className="text-[#181336] text-[13px] font-[600]"
                >
                  Vendors Name{" "}
                </label>
                <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
              </div>
              <div className="w-full mb-3 flex flex-col items-start justify-start gap-[0.2rem]">
                <label
                  htmlFor="event"
                  className="text-[#181336] text-[13px] font-[600]"
                >
                  Event Date
                </label>
                <Input
                  className="w-full authInput"
                  placeholder="This is a placeholder"
                  id="location"
                />
              </div>
              <div className="w-full mb-3 flex flex-col items-start justify-start gap-[0.2rem]">
                <label
                  htmlFor="eventTime"
                  className="text-[#181336] text-[13px] font-[600]"
                >
                  Event Time{" "}
                </label>
                <Input
                  className="w-full authInput"
                  placeholder="This is a placeholder"
                  id="eventTime"
                />
              </div>
              <div className="w-full mb-3 flex flex-col items-start justify-start gap-[0.2rem]">
                <label
                  htmlFor=""
                  className="text-[#181336] text-[13px] font-[600]"
                >
                  Select{" "}
                </label>
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="select"
                  defaultValue={["Captions"]}
                  optionLabelProp="label"
                >
                  <Option value="option" label="option">
                    option1
                  </Option>
                  <Option value="option1" label="option1">
                    option2
                  </Option>
                  <Option value="option3" label="option3">
                    option3
                  </Option>
                </Select>
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

export default Event;

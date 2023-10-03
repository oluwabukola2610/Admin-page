"use client";
import React, { useEffect, useState } from "react";
import { CustomTable as Table } from "@/lib/AntDesignComponents";
import TableIcon from "@/assets/icon/TableIcon";
import FilterDropdown from "../layouts/FilterComponent";
import { TablePaginationConfig } from "antd/es/table";
import { Pagination, TransactionType } from "../type";
import { DatePicker, Dropdown, Input, Menu, MenuProps } from "antd";
import TransactionDrawer from "./TransactionDrawer";

const pageSizes = [5, 10, 20];

const Transaction = () => {
  const [TransactionData, setTransactionData] = useState<TransactionType[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<Pagination>({
    current: 1,
    pageSize: 5,
  });
  const [open, setOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] =
    useState<TransactionType | null>(null);

  const FetchData = async () => {
    setLoading(true);
    fetch("https://testapi.io/api/omobolaji1/transaction")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((item:TransactionType) => ({
          ...item,
          date: new Date(item.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        }));
        setTransactionData(formattedData);
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
      title: "Date",
      sorter: true,
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Counter party",
      sorter: true,
      dataIndex: "counterparty",
      key: "counterparty",
    },
    {
      title: "Transaction memo",
      dataIndex: "type",
      sorter: true,
      key: "type",
    },
    {
      title: "Source",
      sorter: true,
      dataIndex: "source",
      key: "source",
    },
    {
      title: "Amount",
      sorter: true,
      dataIndex: "amount",
      key: "amount",
      render: (amount: number, record: TransactionType) => {
        let amountColorClass = "";
        if (record.type === "reversed") {
          amountColorClass = "text-[#FF3956]";
        } else if (record.type === "completed") {
          amountColorClass = "text-[#0AA07B]";
        } else if (record.type === "failed") {
          amountColorClass = "text-[#FF3956]";
        }
        return <span className={amountColorClass}>{`N ${amount}`}</span>;
      },
    },
    {
      title: (
        <span className="flex items-center">
          <p>Action</p>
          <TableIcon className="ml-4" />
        </span>
      ),
      dataIndex: "id",
      render: (_:any,record: TransactionType) => {
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
            <Menu.Item key="download-receipt">Download Receipt</Menu.Item>
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

  const handleChange = (newPagination: TablePaginationConfig) => {
    setPagination({
      ...pagination,
      ...newPagination,
    });
  };

  return (
    <main className="mx-auto flex flex-col p-4 h-screen overflow-y-scroll">
      <span className="flex flex-col">
        <h4 className="text-[32px] font-[700] text-[#2E2C34]">Transactions</h4>
        <p className="text-[#84818A] text-[14px] font-[400]">
          Show all your account metrics{" "}
        </p>
      </span>
      <div className="bg-white shadow-md p-2 mt-8 space-y-4">
        <div className="flex items-center justify-start w-full gap-[1.5rem]">
          <DatePicker className="h-fit w-fit" placeholder="Start Date" />
          <DatePicker className="h-fit w-fit" placeholder="End Date" />
          <div className="w-fit">
            <Input className="h-fit w-fit" placeholder="Amount" />
          </div>
          <div className="w-fit">
            <Input className="h-fit w-fit" placeholder="Source" />
          </div>
          <FilterDropdown />
        </div>
        <div className="relative overflow-x-auto  sm:rounded-lg w-[22rem] md:w-full">
          <Table
            dataSource={TransactionData}
            columns={columns}
            loading={loading}
            pagination={pagination}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <span className="mr-2">Page Size:</span>
          <select
            className="border rounded p-1"
            value={pagination.pageSize}
            onChange={(e) =>
              handleChange({ pageSize: parseInt(e.target.value) })
            }
          >
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
      <TransactionDrawer
        Open={open}
        onClose={() => setOpen(false)}
        account={selectedAccount}
      />
    </main>
  );
};

export default Transaction;

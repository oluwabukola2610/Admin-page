"use client";
import React, { useEffect, useState } from "react";
import { CustomTable as Table } from "@/lib/AntDesignComponents";
import TableIcon from "@/assets/icon/TableIcon";
import FilterDropdown from "../layouts/FilterComponent";
import { TablePaginationConfig } from "antd/es/table";
import SwiperDetails from "../layouts/SwiperDetails";
import { AccountData, Pagination } from "../type";



const pageSizes = [5, 10, 20];

const Account = () => {
  const [accountData, setAccountData] = useState<AccountData[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<Pagination>({
    current: 1,
    pageSize: 5,
  });
  const [open, setOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<AccountData | null>(
    null
  );

  const FetchData = async () => {
    setLoading(true);
    fetch("https://testapi.io/api/omobolaji1/account")
      .then((response) => response.json())
      .then((data) => {
        setAccountData(data);
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
      title: "First Name",
      sorter: true,
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      sorter: true,
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Cliq ID",
      dataIndex: "cliqID",
      sorter: true,
      key: "cliqID",
    },
    {
      title: "BVN",
      sorter: true,
      dataIndex: "BVN",
      key: "bvn",
    },
    {
      title: "Email",
      sorter: true,
      dataIndex: "email",
      key: "email",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Action</p>
          <TableIcon className="ml-4" />
        </span>
      ),
      dataIndex: "id",
      render: (_:any,record: AccountData) => (
        <span
          className="cursor-pointer"
          onClick={() => {
            setSelectedAccount(record);
            setOpen(true);
          }}
        >
          ...
        </span>
      ),
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
        <h4 className="text-[32px] font-[700] text-[#2E2C34]">Account</h4>
        <p className="text-[#84818A] text-[14px] font-[400]">
          Account activities{" "}
        </p>
      </span>
      <div className="bg-white shadow-md p-2 mt-8 space-y-4">
        <FilterDropdown />
        <div className="relative overflow-x-auto  sm:rounded-lg w-[22rem] md:w-full">
          <Table
            dataSource={accountData}
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
        <SwiperDetails
          Open={open}
          onClose={() => setOpen(false)}
          account={selectedAccount}
          title="Account Details"
        />
      </div>
    </main>
  );
};

export default Account;

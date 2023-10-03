"use client";
import React, { useEffect, useState } from "react";
import { CustomTable as Table } from "@/lib/AntDesignComponents";
import TableIcon from "@/assets/icon/TableIcon";
import FilterDropdown from "../layouts/FilterComponent";
import { TablePaginationConfig } from "antd/es/table";
import SwiperDetails from "../layouts/SwiperDetails";
import { AccountData, Pagination } from "../type";

const pageSizes = [5, 10, 20];

const UserTable = () => {
  const [userData, setUserData] = useState<AccountData[]>([]);
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
    fetch("https://testapi.io/api/omobolaji1/user")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
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
      title: "Phone",
      sorter: true,
      dataIndex: "phone",
      key: "phone",
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
    <div className="bg-white shadow-md p-2 mt-8 space-y-4">
      <FilterDropdown />
      <div className="relative overflow-x-auto  sm:rounded-lg w-[22rem] md:w-full">
        <Table
          dataSource={userData}
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
          onChange={(e) => handleChange({ pageSize: parseInt(e.target.value) })}
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
        title="User Details"
      />
    </div>
  );
};

export default UserTable;

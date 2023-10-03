"use client";
import { useEffect, useState } from "react";
import qs from "querystring";
import { CustomTable as Table } from "@/lib/AntDesignComponents";
import TableIcon from "@/assets/icon/TableIcon";
import FilterIcon from "@/assets/icon/FilterIcon";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import AdminModal from "./AdminModal";
import AdminDrawer from "./AdminDrawer";

interface DataType {
  name: string;
  date: string;
  purpose: string;
  type: string;
  amount: string;
}

interface TableParams {
  pagination?: TablePaginationConfig;
}

const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const AdminTable = () => {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const columns: ColumnsType<DataType> = [
    {
      title: (
        <span className="flex items-center">
          <p>First Name</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "Firstname",
      render: (name) => `${name}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Last Name</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "LastName",
      render: (name) => `${name}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Phone</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "phone",
      render: (phone) => `${phone}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Role</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "role",
      render: (role) => `${role}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Last Logged</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "lastLogged",
      render: (date) => `${date}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Action</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "_id",
      render: (id) => (
        <span className="cursor-pointer" onClick={() => setOpen(true)}>
          ...
        </span>
      ),
      width: "20%",
    },
  ];

  const fetchData = () => {
    setLoading(true);
    fetch(`https://testapi.io/api/sikiru/purscliq-admin`)
      .then((res) => res.json())
      .then((results) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <>
      <div className="bg-white flex flex-col gap-[0.5rem] p-[2%]">
        {/* <div className="flex items-center justify-end w-full gap-[1rem]">
          <FilterIcon />
        </div> */}
        <Table
          columns={columns}
          // rowKey={(record) => record?._id}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
        />
      </div>
      <AdminDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default AdminTable;

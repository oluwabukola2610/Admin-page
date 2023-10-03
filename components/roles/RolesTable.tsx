"use client";
import { useEffect, useState } from "react";
import { CustomTable as Table } from "@/lib/AntDesignComponents";
import TableIcon from "@/assets/icon/TableIcon";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import RoleDrawer from "./RoleDrawer";

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

const RoleTable = () => {
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
          <p>Role Name</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "name",
      render: (name) => `${name}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Type</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "Type",
      render: (type) => `${type}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Created by</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "created",
      render: (role) => `${role}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Total number</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "number",
      render: (number) => `${number}`,
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
    fetch(`https://testapi.io/api/sikiru/purscliq-role`)
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
        <h4 className="text-[19px] font-[600] text-[#000]">Available Role</h4>
        <Table
          columns={columns}
          // rowKey={(record) => record?._id}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
        />
      </div>
      <RoleDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default RoleTable;

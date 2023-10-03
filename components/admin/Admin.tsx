"use client";
import { useState } from "react";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import AddIcon from "@/assets/icon/AddIcon";
import AdminTable from "./AdminTable";
import AdminModal from "./AdminModal";

const Admin = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-[98%] mx-auto flex flex-col gap-[0.5rem] overflow-y-scroll h-screen py-[1%]">
        <div className="flex items-center justify-between">
          <span className="flex flex-col">
            <h4>Administration</h4>
            <p>List of all the admin</p>
          </span>
          <Button
            onClick={() => setOpen(true)}
            type="primary"
            icon={<AddIcon />}
            className="flexlayout items-center"
          >
            Add Admin
          </Button>
        </div>
        <AdminTable />
      </div>
      <AdminModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Admin;

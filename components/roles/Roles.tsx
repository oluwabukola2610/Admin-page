"use client";
import { useState } from "react";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import AddIcon from "@/assets/icon/AddIcon";
import RoleModal from "./RoleModal";
import RoleTable from "./RolesTable";

const Roles = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-[98%] mx-auto flex flex-col gap-[0.5rem] overflow-y-scroll h-screen py-[1%]">
        <div className="flex items-center justify-between">
          <span className="flex flex-col">
            <h4>Role and permission</h4>
            <p>Showing your account metrics</p>
          </span>
          <Button
            onClick={() => setOpen(true)}
            type="primary"
            icon={<AddIcon />}
            className="flexlayout items-center"
          >
            Create Role
          </Button>
        </div>
        <RoleTable />
      </div>
      <RoleModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Roles;

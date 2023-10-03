import { useState } from "react";
import { CustomDrawer as Drawer } from "@/lib/AntDesignComponents";
import { modal } from "../type";
import PreviewRole from "./PreviewRole";

const RoleDrawer = ({ open, setOpen }: modal) => {
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Drawer onClose={onClose} maskClosable={false} open={open}>
      <PreviewRole />
    </Drawer>
  );
};

export default RoleDrawer;

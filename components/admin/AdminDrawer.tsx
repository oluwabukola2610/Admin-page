import { useState } from "react";
import {
  CustomDrawer as Drawer,
  CustomInput as Input,
  CustomSwitch as Switch,
  CustomSelect as Select,
  CustomButton as Button,
} from "@/lib/AntDesignComponents";
import { modal } from "../type";
import PreviewRole from "./PreviewRole";

const AdminDrawer = ({ open, setOpen }: modal) => {
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };
  return (
    <Drawer
      onClose={onClose}
      maskClosable={false}
      open={open}
      extra={
        <div className="flex items-center gap-[0.5rem]">
          <p>preview role</p>
          <Switch
            checked={childrenDrawer}
            onChange={(e) => setChildrenDrawer(e)}
          />
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-[0.5rem]">
        <div className="flex items-center justify-between gap-[0.5rem]">
          <span className="flex flex-col w-full">
            <label
              htmlFor="firstName"
              className="text-[#181336] text-[16px] font-[600]"
            >
              First Name
            </label>
            <Input id="firstName" placeholder="First Name" />
          </span>
          <span className="flex flex-col w-full">
            <label
              htmlFor="lastName"
              className="text-[#181336] text-[16px] font-[600]"
            >
              Last Name
            </label>
            <Input id="lastName" placeholder="Last Name" />
          </span>
        </div>
        <span className="flex flex-col w-full">
          <label
            htmlFor="email"
            className="text-[#181336] text-[16px] font-[600]"
          >
            Email Address
          </label>
          <Input id="email" type="email" placeholder="Email" />
        </span>
        <span className="flex flex-col w-full">
          <label
            htmlFor="role"
            className="text-[#181336] text-[16px] font-[600]"
          >
            Role
          </label>
          <Select id="role" placeholder="Role" />
        </span>
        <Button type="primary">save</Button>
        <Button>cancel</Button>
      </div>
      <Drawer
        open={childrenDrawer}
        onClose={onChildrenDrawerClose}
        closable={false}
      >
        <PreviewRole />
      </Drawer>
    </Drawer>
  );
};

export default AdminDrawer;

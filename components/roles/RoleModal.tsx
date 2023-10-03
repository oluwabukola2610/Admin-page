import {
  CustomModal as Modal,
  CustomInput as Input,
  CustomButton as Button,
  CustomRadio as Radio,
  RadioGroup,
} from "@/lib/AntDesignComponents";
import { modal } from "../type";

const RoleModal = ({ open, setOpen }: modal) => {
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal closable footer={null} onCancel={handleCancel} open={open}>
      <div className="grid grid-cols-1 gap-[0.5rem]">
        <span className="flex flex-col">
          <h2 className="text-[#3180E7] text-center text-[28px] font-[700]">
            Create Roles and Permission
          </h2>
          <p className="text-[#515B6F] text-center text-[18px] font-[400]">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin mauris sit
            egestas gravida nisl nunc diam libero amet. Aliquam nunc.
          </p>
        </span>
        <div className="grid grid-cols-1 gap-[0.5rem]">
          <span className="flex flex-col w-full">
            <label
              htmlFor="roleTitle"
              className="text-[#181336] text-[16px] font-[600]"
            >
              what do you want to call this role
            </label>
            <Input id="roleTitle" placeholder="Role Title" />
          </span>
          <div className="flex flex-col">
            <h4 className="text-[#181336] text-[16px] font-[600]">
              Payment and invoice
            </h4>
            <span className="flex justify-between items-center">
              <p className="text-[#515B6F] text-[16px]">
                Prepare and manage payment and invoice
              </p>
              <RadioGroup name="payment">
                <Radio value={"yes"}>Yes</Radio>
                <Radio value={"no"}>No</Radio>
              </RadioGroup>
            </span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#181336] text-[16px] font-[600]">
              Account Privileges
            </h4>
            <span className="flex justify-between items-center">
              <p className="text-[#515B6F] text-[16px]">Can View Account</p>
              <RadioGroup name="payment">
                <Radio value={"yes"}>Yes</Radio>
                <Radio value={"no"}>No</Radio>
              </RadioGroup>
            </span>
            <span className="flex justify-between items-center">
              <p className="text-[#515B6F] text-[16px]">
                Can Download Statement
              </p>
              <RadioGroup name="payment">
                <Radio value={"yes"}>Yes</Radio>
                <Radio value={"no"}>No</Radio>
              </RadioGroup>
            </span>
            <span className="flex justify-between items-center">
              <p className="text-[#515B6F] text-[16px]">Can Create Account</p>
              <RadioGroup name="payment">
                <Radio value={"yes"}>Yes</Radio>
                <Radio value={"no"}>No</Radio>
              </RadioGroup>
            </span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#181336] text-[16px] font-[600]">
              Administration Privileges
            </h4>
            <span className="flex justify-between items-center">
              <p className="text-[#515B6F] text-[16px]">Team Mates</p>
              <RadioGroup name="payment">
                <Radio value={"yes"}>Yes</Radio>
                <Radio value={"no"}>No</Radio>
              </RadioGroup>
            </span>
            <span className="flex justify-between items-center">
              <p className="text-[#515B6F] text-[16px]">Role and Privileges</p>
              <RadioGroup name="payment">
                <Radio value={"yes"}>Yes</Radio>
                <Radio value={"no"}>No</Radio>
              </RadioGroup>
            </span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#181336] text-[16px] font-[600]">
              Settings Privileges
            </h4>
            <span className="flex justify-between items-center">
              <p className="text-[#515B6F] text-[16px]">Company Settings</p>
              <RadioGroup name="payment">
                <Radio value={"yes"}>Yes</Radio>
                <Radio value={"no"}>No</Radio>
              </RadioGroup>
            </span>
            <span className="flex justify-between items-center">
              <p className="text-[#515B6F] text-[16px]">Compliance Check</p>
              <RadioGroup name="payment">
                <Radio value={"yes"}>Yes</Radio>
                <Radio value={"no"}>No</Radio>
              </RadioGroup>
            </span>
            <span className="flex justify-between items-center">
              <p className="text-[#515B6F] text-[16px]">Approval Rules</p>
              <RadioGroup name="payment">
                <Radio value={"yes"}>Yes</Radio>
                <Radio value={"no"}>No</Radio>
              </RadioGroup>
            </span>
          </div>
        </div>
        <Button type="primary">save role</Button>
      </div>
    </Modal>
  );
};

export default RoleModal;

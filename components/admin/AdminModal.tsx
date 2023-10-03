import {
  CustomModal as Modal,
  CustomInput as Input,
  CustomSelect as Select,
  CustomButton as Button,
} from "@/lib/AntDesignComponents";
import { modal } from "../type";

const AdminModal = ({ open, setOpen }: modal) => {
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal closable footer={null} onCancel={handleCancel} open={open}>
      <div className="grid grid-cols-1 gap-[0.5rem]">
        <span className="flex flex-col">
          <h2 className="text-[#3180E7] text-center text-[28px] font-[700]">
            Add Admin
          </h2>
          <p className="text-[#515B6F] text-center text-[18px] font-[400]">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin mauris sit
            egestas gravida nisl nunc diam libero amet. Aliquam nunc.
          </p>
        </span>
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
        </div>
        <Button type="primary">submit</Button>
      </div>
    </Modal>
  );
};

export default AdminModal;

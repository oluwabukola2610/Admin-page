import { layoutType } from "./layoutType";
import Image from "next/image";
import logo from "@/assets/logo.svg";

const Navigation = ({ children }: layoutType) => {
  return (
    <div className="grid grid-cols-1 grid-rows-[20%_80%] bg-[#EEF2F7] min-h-screen">
      <div className="h-fit p-[1rem]">
        <Image className="" alt="logo" src={logo} />
      </div>
      {children}
    </div>
  );
};

export default Navigation;

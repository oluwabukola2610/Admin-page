"use client";
import { Avatar } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RiArrowDropDownLine } from "react-icons/ri";
import { sidebarData } from "@/components/data";
const SideBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <div className="drawer-side z-10">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <aside className="flex flex-col w-[16rem] h-screen overflow-hidden  shadow-xl bg-white">
        <div className="flex space-x-2 items-center justify-center mx-2 my-4 bg-[#EEF2F7] rounded-md p-2 ">
          <Avatar style={{ backgroundColor: "#CDA4FF" }}>JD</Avatar>
          <span>
            Ayobami temi <p className="text-xs">super admin</p>
          </span>
          <RiArrowDropDownLine size={25} />
        </div>
        <div className="my-3 border border-gray-300" />
        <ul className="flex flex-col justify-between flex-1  h-screen px-2 mb-3 overflow-y-auto">
          {sidebarData.map((item) => (
            <div
              key={item.link}
              onClick={() => router.push(item.link)}
              className={`flex items-center px-3 py-2  rounded-lg cursor-pointer ${
                pathName.includes(item.link) ? " text-blue-500" : ""
              }`}
            >
              {item.icon}
              <span className="mx-4">{item.title}</span>
            </div>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;

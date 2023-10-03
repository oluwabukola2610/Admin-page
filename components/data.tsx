import {
  MdOutlineAccountBalanceWallet,
  MdAccountBalance,
  MdOutlineAdminPanelSettings,
  MdEvent,
} from "react-icons/md";
import { AiOutlineIdcard ,AiOutlineLogout} from "react-icons/ai";
import { FaRegUser, FaProductHunt } from "react-icons/fa";
import { GrTransaction, GrDocumentUser } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
export const sidebarData = [
    {
      title: "Dashboard",
      icon: <MdAccountBalance className=" font-bold"/>,
      link: "/dashboard",
    },
    {
      title: "Account",
      icon: <MdOutlineAccountBalanceWallet className=" font-bold" />,
      link: "/dashboard/account",
    },
    {
      title: "Card",
      icon: <AiOutlineIdcard className=" font-bold"/>,
      link: "/dashboard/card",
    },
    {
        title: "User",
        icon: <FaRegUser className=" font-bold"/>,
        link: "/dashboard/users",
      },
      {
        title: "Admin",
        icon: < MdOutlineAdminPanelSettings className=" font-bold"/>,
        link: "/dashboard/admin",
      },
      {
        title: "Transaction",
        icon: <GrTransaction className=" font-bold" />,
        link: "/dashboard/transactions",
      },
      {
        title: "Roles & Permissions",
        icon: <GrDocumentUser  className=" font-bold" />,
        link: "/dashboard/roles",
      },
      {
        title: "Charges",
        icon: <VscGitPullRequestGoToChanges className=" font-bold" />,
        link: "/dashboard/charges",
      },
      {
        title: "Promotions",
        icon: <FaProductHunt className=" font-bold" />,
        link: "/dashboard/promotion",
      },
      {
        title: "Notification",
        icon: <IoMdNotificationsOutline className=" font-bold" />,
        link: "/dashboard/user-notification",
      },
      {
        title: "Event",
        icon: <MdEvent className=" font-bold" />,
        link: "/dashboard/user-event",
      },
      {
        title: "Setting",
        icon: <FiSettings className=" font-bold" />,
        link: "/dashboard/user-setting",
      },
      {
        title: "Log Out",
        icon: <AiOutlineLogout className=" font-bold" />,
        link: "/login",
      },
  ];
  
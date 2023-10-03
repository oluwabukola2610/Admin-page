import WalletIcon from "@/assets/icon/WalletIcon";
import VariantWalletIcon from "@/assets/icon/VariantWalletIcon";
import YenIcon from "@/assets/icon/YenIcon";
import CardIcon from "@/assets/icon/CardIcon";
import GreyCardIcon from "@/assets/icon/GreyCardIcon";
import UserIcon from "@/assets/icon/UserIcon";
import UserFi from "@/assets/icon/UserFi";
import UserPlusIcon from "@/assets/icon/UserPlusIcon";
import MultiUserIcon from "@/assets/icon/MultiUserIcon";
import RightArrow from "@/assets/icon/RightArrow";
import UpArrow from "@/assets/icon/UpArrow";
import AreaCharts from "./AreaCharts";
import BarCharts from "./BarCharts";
import DashboardTable from "./DashboardTable";
import { CustomProgress as Progress } from "@/lib/AntDesignComponents";
const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-[0.8rem] p-3 h-screen overflow-y-scroll w-[98%] mx-auto">
      <span className="flex flex-col">
        <h4 className="text-[32px] font-[700] text-[#2E2C34]">Dashboard</h4>
        <p className="text-[#84818A] text-[14px] font-[400]">
          Let check your update for today
        </p>
      </span>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[0.5rem] justify-between">
        <div className="p-[5%] flex items-start justify-between gap-[0.2rem] bg-white shadow-sm rounded-[8px]">
          <span className="flex flex-col">
            <h5 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
              Total Users
            </h5>
            <span className="flex items-center gap-[0.5rem]">
              <h4 className="text-[#32475CDE]/[87%] text-[20px] font-[800]">
                21,459
              </h4>
              <p className="text-[#40DD7F] text-[14px] font-[600]">(+29%)</p>
            </span>
            <p className="text-[#32475C99]/[60%] text-[14px] font-[400]">
              Total Users In Purscliq
            </p>
          </span>
          <UserIcon />
        </div>
        <div className="p-[5%] flex items-start justify-between gap-[0.2rem] bg-white shadow-sm rounded-[8px]">
          <span className="flex flex-col">
            <h5 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
              Total Inactive Users
            </h5>
            <span className="flex items-center gap-[0.5rem]">
              <h4 className="text-[#32475CDE]/[87%] text-[20px] font-[800]">
                4,567
              </h4>
              <p className="text-[#40DD7F] text-[14px] font-[600]">(+18%)</p>
            </span>
            <p className="text-[#32475C99]/[60%] text-[14px] font-[400]">
              Last week analytics
            </p>
          </span>
          <UserPlusIcon />
        </div>
        <div className="p-[5%] flex items-start justify-between gap-[0.2rem] bg-white shadow-sm rounded-[8px]">
          <span className="flex flex-col">
            <h5 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
              Active Users
            </h5>
            <span className="flex items-center gap-[0.5rem]">
              <h4 className="text-[#32475CDE]/[87%] text-[20px] font-[800]">
                19,860
              </h4>
              <p className="text-[#E93C3C] text-[14px] font-[600]">(-14%)</p>
            </span>
            <p className="text-[#32475C99]/[60%] text-[14px] font-[400]">
              Last week analytics
            </p>
          </span>
          <MultiUserIcon />
        </div>
        <div className="p-[5%] flex items-start justify-between gap-[0.2rem] bg-white shadow-sm rounded-[8px]">
          <span className="flex flex-col">
            <h5 className="text-[#32475C99]/[60%] text-[16px] font-[700]">
              Blocked Accounts
            </h5>
            <span className="flex items-center gap-[0.5rem]">
              <h4 className="text-[#32475CDE]/[87%] text-[20px] font-[800]">
                237
              </h4>
              <p className="text-[#E93C3C] text-[14px] font-[600]">(+42%)</p>
            </span>
            <p className="text-[#32475C99]/[60%] text-[14px] font-[400]">
              Last week analytics
            </p>
          </span>
          <UserFi />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[0.5rem]">
        <div className="grid grid-cols-1 gap-[0.3rem] bg-white shadow-sm rounded-[8px] p-[5%]">
          <h4 className="text-[#32475CDE]/[87%] text-[20px] font-[700]">
            Total Balance
          </h4>
          <span className="flex items-center justify-start gap-[0.5rem]">
            <WalletIcon />
            <span className="flex flex-col">
              <h4 className="text-[#32475CDE]/[87%] text-[20px] font-[600]">
                NGN 2,540.00k
              </h4>
              <p className="text-[#32475C99]/[60%] text-[14px] font-[400]">
                Wallet
              </p>
            </span>
          </span>
          <AreaCharts />
          <div className="flex items-center gap-[0.3rem]">
            <p className="text-[#32475C61]/[38%] text-[14px] font-[400]">
              You have done 57.6% more sales. Check your new badge in your
              profile.
            </p>
            <RightArrow />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[0.3rem] bg-white shadow-sm rounded-[8px] p-[5%]">
          <span className="flex flex-col gap-[0.2rem]">
            <h4 className="text-[#32475CDE]/[87%] text-[20px] font-[700]">
              Earning Report
            </h4>
            <p className="text-[#32475C99]/[60%] text-[14px] font-[400]">
              Weekly Earnings Overview
            </p>
          </span>
          <div className="grid grid-cols-[15%_40%_45%] items-start gap-[0.2rem]">
            <YenIcon />
            <span className="flex flex-col items-start justify-start">
              <h4 className="text-[#32475CDE]/[87%] text-[15px] font-[400]">
                Total Income
              </h4>
              <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
                Affiliation
              </p>
            </span>
            <span className="flex self-center justify-between items-center">
              <p className="text-[#32475C99]/[60%] text-[14px] font-[400]">
                NGN 3,571
              </p>
              <UpArrow />
              <p className="text-[#32475C99]/[60%] text-[14px] font-[400]">
                39%
              </p>
            </span>
          </div>
          <div className="grid grid-cols-[15%_40%_45%] items-start gap-[0.2rem]">
            <GreyCardIcon />
            <span className="flex flex-col items-start justify-start">
              <h4 className="text-[#32475CDE]/[87%] text-[15px] font-[400]">
                Total Expenses
              </h4>
              <p className="text-[#32475C99]/[60%] text-[16px] font-[400]">
                Marketing
              </p>
            </span>
            <span className="flex self-center justify-between items-center">
              <p className="text-[#32475C99]/[60%] text-[14px] font-[400]">
                NGN 3,571
              </p>
              <UpArrow />
              <p className="text-[#32475C99]/[60%] text-[14px] font-[400]">
                39%
              </p>
            </span>
          </div>
          <BarCharts />
        </div>
        <div className="grid grid-cols-2 gap-[0.3rem]">
          <div className="bg-white shadow-sm rounded-[8px] p-[5%] flex flex-col justify-center gap-[0.5rem]">
            <VariantWalletIcon />
            <p className="text-[#32475C]/[60%] text-[14px] font-[400]">
              Revenue
            </p>
            <h4 className="text-[#32475CDE]/[87%] text-[20px] font-[600]">
              N4,679
            </h4>
            <span className="flex items-center gap-[0.2rem]">
              <UpArrow />
              <p className="text-[#3180E7] text-[14px] font-[600]">28.14%</p>
            </span>
          </div>
          <div className="grid grid-cols-1 bg-white shadow-sm rounded-[8px] p-[5%] gap-[0.5rem]">
            <p className="text-[#32475C][60%] text-[14px] font-[400]">Profit</p>
            <h4 className="text-[#32475CDE]/[87%] text-[20px] font-[600]">
              624k
            </h4>
            <BarCharts />
          </div>
          <div className="bg-white shadow-sm rounded-[8px] p-[5%] flex flex-col justify-center gap-[0.5rem]">
            <p className="text-[#32475C]/[60%] text-[14px] font-[400]">
              Expenses
            </p>
            <h4 className="text-[#32475CDE]/[87%] text-[20px] font-[600]">
              N4,679
            </h4>
            <Progress percent={78} type="dashboard" gapDegree={180} />
            <p className="text-center text-[#32475C99]/[60%] text-[14px] font-[400]">
              NGN21k Expenses more than last month
            </p>
          </div>
          <div className="bg-white shadow-sm rounded-[8px] p-[5%] flex flex-col justify-center gap-[0.5rem]">
            <CardIcon />
            <p className="text-[#32475C]/[60%] text-[14px] font-[400]">
              Transactions
            </p>
            <h4 className="text-[#32475CDE]/[87%] text-[20px] font-[600]">
              N14,854
            </h4>
            <span className="flex items-center gap-[0.2rem]">
              <UpArrow />
              <p className="text-[#3180E7] text-[14px] font-[400]">+62%</p>
            </span>
          </div>
        </div>
      </div>
      <DashboardTable />
    </div>
  );
};

export default Dashboard;

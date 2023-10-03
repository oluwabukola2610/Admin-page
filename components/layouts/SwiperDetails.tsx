import { Drawer } from "antd";
import React from "react";
import { AccountData } from "../type";

interface AccountDetailsProps {
  Open: boolean;
  onClose: () => void;
  account: AccountData | null;
  title?: string;
}

const SwiperDetails: React.FC<AccountDetailsProps> = ({
  Open,
  onClose,
  account,
  title,
}) => {
  return (
    <Drawer title={title} placement="right" onClose={onClose} open={Open}>
      {account && (
        <div className="p-4 border border-gray-100 space-y-4 mt-5">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="text-slate-500  pr-2">First Name:</div>
            <div className="leading-tight font-semibold ">
              {account.firstName}
            </div>
            <div className="text-slate-500  pr-2">Last Name:</div>
            <div className="leading-tight font-semibold">
              {account.lastName}
            </div>
            <div className="text-slate-500  pr-2">Email:</div>
            <div className="leading-tight font-semibold">
              {account.email}
            </div>{" "}
            <div className="text-slate-500  pr-2">Cliq ID:</div>
            <div className="leading-tight font-semibold">{account.cliqID}</div>
            <div className="text-slate-500  pr-2">BVN:</div>
            <div className="leading-tight font-semibold">{account.BVN}</div>
            {account.phone && (
              <>
                <div className="text-slate-500  pr-2">Phone:</div>
                <div className="leading-tight font-semibold">
                  {account.phone}
                </div>
              </>
            )}
          </div>
          <div className="border border-gray-200"></div>
        </div>
      )}
    </Drawer>
  );
};

export default SwiperDetails;

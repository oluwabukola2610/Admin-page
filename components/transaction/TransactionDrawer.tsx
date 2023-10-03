import { Drawer } from "antd";
import React from "react";
import { TransactionType } from "../type";

interface AccountDetailsProps {
  Open: boolean;
  onClose: () => void;
  account: TransactionType | null;
}

const TransactionDrawer: React.FC<AccountDetailsProps> = ({
  Open,
  onClose,
  account,
}) => {
  const getAmountColorClass = (type: string) => {
    if (type === "reversed") {
      return "text-red-500";
    } else if (type === "completed") {
      return "text-green-500";
    } else if (type === "failed") {
      return "text-red-500";
    }
  };

  return (
    <Drawer placement="right" onClose={onClose} open={Open}>
      {account && (
        <>
          <div className="flex flex-col justify-center items-center bg-[#EEF2F7] h-[120px]">
            <h1
              className={`leading-tight font-semibold text-xl ${getAmountColorClass(
                account.type
              )}`}
            >
              ₦{account.amount}
            </h1>
            <p className="text-slate-700 mt-3">{account.counterparty}</p>
          </div>
          <h1 className="font-bold p-2">Transaction Information</h1>
          <div className="p-4 border border-gray-100 space-y-4 mt-5">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="text-slate-500 pr-2">Amount :</div>
              <div className="leading-tight font-semibold">
                ₦{account.amount}
              </div>
              <div className="text-slate-500 pr-2">Date:</div>
              <div className="leading-tight font-semibold">{account.date}</div>
              <div className="text-slate-500 pr-2">Counter party:</div>
              <div className="leading-tight font-semibold">
                {account.counterparty}
              </div>{" "}
              <div className="text-slate-500 pr-2">Bank Name:</div>
              <div className="leading-tight font-semibold">
                {account.source}
              </div>
            </div>
            <div className="border border-gray-200"></div>
          </div>
          <span className="mt-6">
            <p className="font-semibold">Transaction Memo</p>
            <p className="text-slate-500 textlg">{`${account.type} transaction`}</p>
          </span>
        </>
      )}
    </Drawer>
  );
};

export default TransactionDrawer;

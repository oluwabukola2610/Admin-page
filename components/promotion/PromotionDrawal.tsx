import { Drawer } from "antd";
import React from "react";
import { promotionType } from "./Promotion";

interface AccountDetailsProps {
  Open: boolean;
  onClose: () => void;
  account: promotionType | null;
  title?: string;
}

const PromotionDrawal: React.FC<AccountDetailsProps> = ({
  Open,
  onClose,
  account,
  title,
}) => {
  console.log("account:", account);

  return (
    <Drawer title={title} placement="right" onClose={onClose} open={Open}>
      {account && (
        <div className="p-4 border border-gray-100 space-y-4 mt-5">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="text-slate-500  pr-2">Promotion:</div>
            <div className="leading-tight font-semibold ">
              {account.promotion}
            </div>
            <div className="text-slate-500  pr-2">Status:</div>
            <div className="leading-tight font-semibold">{account.status}</div>
            <div className="text-slate-500  pr-2">Ammout:</div>
            <div className="leading-tight font-semibold">{account.amount}</div>
            <div className="border border-gray-200"></div>
          </div>
        </div>
      )}
    </Drawer>
  );
};

export default PromotionDrawal;

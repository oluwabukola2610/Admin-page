export type modal = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export type AccountData = {
  firstName: string;
  lastName: string;
  cliqID: string;
  BVN: string;
  email: string;
  phone?: string;
};
export type TransactionType = {
  date: string;
  counterparty: string;
  type: string;
  source: string;
  amount: number;
};

export interface Pagination {
  current: number;
  pageSize: number;
  total?: number;
}

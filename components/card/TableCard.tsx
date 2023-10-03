import FilterDropdown from "../layouts/FilterComponent";
import { CustomTable as Table } from "@/lib/AntDesignComponents";
const columns = [
  {
    title: "First Name",
    sorter: true,
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    sorter: true,
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Cliq ID",
    dataIndex: "cliqID",
    sorter: true,
    key: "cliqID",
  },
  {
    title: "BVN",
    sorter: true,
    dataIndex: "BVN",
    key: "bvn",
  },
  {
    title: "Email",
    sorter: true,
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Date issued",
    sorter: true,
    dataIndex: "DateIssued",
    key: "date",
  },
  {
    title: "Card Type",
    sorter: true,
    dataIndex: "cardType",
    key: "cardType",
  },
];
const TableCard = () => {
  return (
    <div className="bg-white shadow-md px-2 py-4 mt-4 space-y-4 ">
      <FilterDropdown />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[22rem] md:w-full">
        <Table columns={columns} />
      </div>
      <p className="text-center">
        There is&rsquo;nt a transation for any user yet
      </p>
    </div>
  );
};

export default TableCard;

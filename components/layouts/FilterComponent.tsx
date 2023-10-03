
import React from "react";
import { BsFilter } from "react-icons/bs";

const FilterDropdown = () => {
  return (
    <div className="dropdown dropdown-bottom flex  justify-end">
      <label
        tabIndex={0}
        className="btn btn-sm m-1 flex items-center capitalize text-sm text-gray-700"
      >
        Filter <BsFilter className="ml-2" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-gray-50 rounded-box "
      >
        <li>
          <a>Option 1</a>
        </li>
        <li>
          <a>Option 2</a>
        </li>
      </ul>
    </div>
  );
};

export default FilterDropdown;

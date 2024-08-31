"use client";

import React, { useState } from "react";
import { data } from "../data/data";
import TableRaw from "./TableRaw";

const Table = () => {
  const [items, setItems] = useState(data);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (id) => {
    const changedItems = items.filter((item) => item["Tracking ID"] !== id);
    setItems(changedItems);
  };

  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
    let searchedItems = data;
    if (e.target.value) {
      searchedItems = data.filter((item) =>
        item["Product Name"]
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
    }
    setItems(searchedItems);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (number) => {
    setItemsPerPage(number);
    setCurrentPage(1);
    setOpenDropdown(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    if (pageNumber < 1) {
      setCurrentPage(1);
    } else if (pageNumber > Math.ceil(items.length / itemsPerPage)) {
      setCurrentPage(Math.ceil(items.length / itemsPerPage));
    } else {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="overflow-x-auto font-sans dark:bg-[#1D1E42]">
      <header>
        <div className="flex items-center gap-4 mb-4">
          <p>Show</p>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="w-[41px] h-[31px] bg-[#E0E0E0] flex items-center justify-between px-2 rounded-lg dark:bg-[#141432]"
            >
              {itemsPerPage}
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.62351 6.07L1.22551 3.329C0.942505 3.0065 1.17251 2.5 1.60201 2.5H6.39801C6.49413 2.49992 6.58824 2.52754 6.66906 2.57957C6.74989 2.6316 6.814 2.70582 6.85373 2.79335C6.89346 2.88087 6.90711 2.978 6.89306 3.07309C6.87901 3.16818 6.83785 3.2572 6.77451 3.3295L4.37651 6.0695C4.32957 6.1232 4.2717 6.16625 4.20676 6.19574C4.14182 6.22523 4.07133 6.24049 4.00001 6.24049C3.92868 6.24049 3.85819 6.22523 3.79325 6.19574C3.72831 6.16625 3.67044 6.1232 3.62351 6.0695V6.07Z"
                  fill="#9E9E9E"
                />
              </svg>
            </button>

            {openDropdown && (
              <ul className="absolute bg-[#fff] w-full border border-none rounded-lg dark:bg-[#141432]">
                <li>
                  <button onClick={() => handleItemsPerPageChange(10)}>
                    10
                  </button>
                </li>
                <li>
                  <button onClick={() => handleItemsPerPageChange(15)}>
                    15
                  </button>
                </li>
                <li>
                  <button onClick={() => handleItemsPerPageChange(20)}>
                    20
                  </button>
                </li>
              </ul>
            )}
          </div>
          <p>entries</p>
          <div className="flex items-center border border-gray-400 rounded-md p-2 h-[32px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 14L11.0093 11.004L14 14ZM12.6666 7.00001C12.6666 8.5029 12.0696 9.94424 11.0069 11.0069C9.94421 12.0697 8.50287 12.6667 6.99998 12.6667C5.49709 12.6667 4.05575 12.0697 2.99304 11.0069C1.93034 9.94424 1.33331 8.5029 1.33331 7.00001C1.33331 5.49712 1.93034 4.05578 2.99304 2.99307C4.05575 1.93037 5.49709 1.33334 6.99998 1.33334C8.50287 1.33334 9.94421 1.93037 11.0069 2.99307C12.0696 4.05578 12.6666 5.49712 12.6666 7.00001V7.00001Z"
                stroke="#9E9E9E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              onChange={onChangeInput}
              value={searchValue}
              type="text"
              placeholder="Search..."
              className="outline-none flex-1 ml-2 dark:bg-[#1D1E42]"
            />
          </div>
          <button className="ml-auto w-[139px] h-[32px] bg-[#624DE3] text-white rounded-lg hover:bg-[#7B6EEA]">
            + Add customer
          </button>
        </div>
      </header>
      <table className="min-w-full bg-white mb-[30px] dark:bg-[#1D1E42]">
        <thead>
          <tr className="w-full text-black text-xs font-bold leading-normal dark:text-white">
            <th className="py-3 px-6 text-left">Tracking ID</th>
            <th className="py-3 px-6 text-left w-[200px]">
              <div className="flex items-center justify-between">
                <span className="mr-2">Product</span>
                <span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.40133 7.33334H12.0993C12.674 7.33334 12.9793 6.65335 12.5973 6.22335L8.74866 1.89335C8.68624 1.82288 8.60957 1.76647 8.52372 1.72783C8.43787 1.6892 8.34481 1.66922 8.25067 1.66922C8.15653 1.66922 8.06346 1.6892 7.97761 1.72783C7.89176 1.76647 7.81509 1.82288 7.75266 1.89335L3.90266 6.22335C3.52067 6.65335 3.826 7.33334 4.40133 7.33334ZM7.752 14.106C7.81443 14.1765 7.8911 14.2329 7.97694 14.2715C8.06279 14.3102 8.15586 14.3301 8.25 14.3301C8.34414 14.3301 8.43721 14.3102 8.52305 14.2715C8.6089 14.2329 8.68557 14.1765 8.748 14.106L12.5967 9.77601C12.9793 9.34668 12.674 8.66668 12.0987 8.66668H4.40133C3.82667 8.66668 3.52133 9.34668 3.90333 9.77668L7.752 14.106Z"
                      fill="#9E9E9E"
                    />
                  </svg>
                </span>
              </div>
            </th>
            <th className="py-3 px-6 text-left">
              <div className="flex items-center justify-between">
                <span className="mr-2">Customer</span>
                <span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.40133 7.33334H12.0993C12.674 7.33334 12.9793 6.65335 12.5973 6.22335L8.74866 1.89335C8.68624 1.82288 8.60957 1.76647 8.52372 1.72783C8.43787 1.6892 8.34481 1.66922 8.25067 1.66922C8.15653 1.66922 8.06346 1.6892 7.97761 1.72783C7.89176 1.76647 7.81509 1.82288 7.75266 1.89335L3.90266 6.22335C3.52067 6.65335 3.826 7.33334 4.40133 7.33334ZM7.752 14.106C7.81443 14.1765 7.8911 14.2329 7.97694 14.2715C8.06279 14.3102 8.15586 14.3301 8.25 14.3301C8.34414 14.3301 8.43721 14.3102 8.52305 14.2715C8.6089 14.2329 8.68557 14.1765 8.748 14.106L12.5967 9.77601C12.9793 9.34668 12.674 8.66668 12.0987 8.66668H4.40133C3.82667 8.66668 3.52133 9.34668 3.90333 9.77668L7.752 14.106Z"
                      fill="#9E9E9E"
                    />
                  </svg>
                </span>
              </div>
            </th>{" "}
            <th className="py-3 px-6 text-left">
              <div className="flex items-center justify-between">
                <span className="mr-2">Date</span>
                <span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.40133 7.33334H12.0993C12.674 7.33334 12.9793 6.65335 12.5973 6.22335L8.74866 1.89335C8.68624 1.82288 8.60957 1.76647 8.52372 1.72783C8.43787 1.6892 8.34481 1.66922 8.25067 1.66922C8.15653 1.66922 8.06346 1.6892 7.97761 1.72783C7.89176 1.76647 7.81509 1.82288 7.75266 1.89335L3.90266 6.22335C3.52067 6.65335 3.826 7.33334 4.40133 7.33334ZM7.752 14.106C7.81443 14.1765 7.8911 14.2329 7.97694 14.2715C8.06279 14.3102 8.15586 14.3301 8.25 14.3301C8.34414 14.3301 8.43721 14.3102 8.52305 14.2715C8.6089 14.2329 8.68557 14.1765 8.748 14.106L12.5967 9.77601C12.9793 9.34668 12.674 8.66668 12.0987 8.66668H4.40133C3.82667 8.66668 3.52133 9.34668 3.90333 9.77668L7.752 14.106Z"
                      fill="#9E9E9E"
                    />
                  </svg>
                </span>
              </div>
            </th>
            <th className="py-3 px-6 text-left">Amount</th>
            <th className="py-3 px-6 text-left">Payment Mode</th>
            <th className="py-3 px-6 text-left">
              <div className="flex items-center justify-between">
                <span className="mr-2">Status</span>
                <span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.40133 7.33334H12.0993C12.674 7.33334 12.9793 6.65335 12.5973 6.22335L8.74866 1.89335C8.68624 1.82288 8.60957 1.76647 8.52372 1.72783C8.43787 1.6892 8.34481 1.66922 8.25067 1.66922C8.15653 1.66922 8.06346 1.6892 7.97761 1.72783C7.89176 1.76647 7.81509 1.82288 7.75266 1.89335L3.90266 6.22335C3.52067 6.65335 3.826 7.33334 4.40133 7.33334ZM7.752 14.106C7.81443 14.1765 7.8911 14.2329 7.97694 14.2715C8.06279 14.3102 8.15586 14.3301 8.25 14.3301C8.34414 14.3301 8.43721 14.3102 8.52305 14.2715C8.6089 14.2329 8.68557 14.1765 8.748 14.106L12.5967 9.77601C12.9793 9.34668 12.674 8.66668 12.0987 8.66668H4.40133C3.82667 8.66668 3.52133 9.34668 3.90333 9.77668L7.752 14.106Z"
                      fill="#9E9E9E"
                    />
                  </svg>
                </span>
              </div>
            </th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className=" text-sm">
          {currentItems.map((item, index) => (
            <TableRaw
              key={item["Tracking ID"]}
              item={item}
              handleDelete={handleDelete}
              index={index}
            />
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          className="text-[#9E9E9E] font-light"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from(
          { length: Math.ceil(items.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`w-[41px] h-[31px] bg-[#E0E0E0] text-black rounded-lg hover:bg-[#624DE3] hover:text-white focus:bg-[#624DE3] ${
                currentPage === index + 1 ? "bg-[#624DE3] text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          )
        )}
        <button
          onClick={() => paginate(currentPage + 1)}
          className="text-[#9E9E9E] font-light"
          disabled={currentPage === Math.ceil(items.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;

import React from "react";

const TableRaw = ({ item, handleDelete, index }) => {
  return (
    <tr
      key={item["Tracking ID"]}
      className={`${
        index % 2 === 0
          ? "bg-[#F7F6FE] dark:bg-[#26264F]"
          : "bg-[#FFFFFF] dark:bg-[#1D1E42]"
      }`}
    >
      <td className="py-3 px-6 text-left whitespace-nowrap">
        #{item["Tracking ID"]}
      </td>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <img
            src={item["Product Image"]}
            alt="Product Image"
            width={32}
            height={32}
            className="mr-2"
          />
          <p className=" flex-1 whitespace-normal break-words">
            {item["Product Name"]}
          </p>
        </div>
      </td>

      <td className="py-3 px-6 text-left whitespace-nowrap">{item.Customer}</td>
      <td className="py-3 px-6 text-left whitespace-nowrap">{item.Date}</td>
      <td className="py-3 px-6 text-left whitespace-nowrap">${item.Amount}</td>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        {item["Payment Mode"]}
      </td>
      <td className="py-3 px-6 text-left">
        <span
          className={`py-1 px-3 rounded-full text-xs 
    ${item.Status === "Delivered" ? "bg-[#EBF9F1] text-[#1F9254]" : ""}
    ${item.Status === "Process" ? "bg-[#FEF2E5] text-[#CD6200]" : ""}
    ${item.Status === "Cancelled" ? "bg-[#FBE7E8] text-[#A30D11]" : ""}`}
        >
          {item.Status}
        </span>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex item-center justify-center gap-4">
          <button className="w-4 mr-2 transform hover:scale-110">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.625 4H4.625C4.09457 4 3.58586 4.21071 3.21079 4.58579C2.83571 4.96086 2.625 5.46957 2.625 6V20C2.625 20.5304 2.83571 21.0391 3.21079 21.4142C3.58586 21.7893 4.09457 22 4.625 22H18.625C19.1554 22 19.6641 21.7893 20.0392 21.4142C20.4143 21.0391 20.625 20.5304 20.625 20V13"
                stroke="#624DE3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.125 2.50001C19.5228 2.10219 20.0624 1.87869 20.625 1.87869C21.1876 1.87869 21.7272 2.10219 22.125 2.50001C22.5228 2.89784 22.7463 3.4374 22.7463 4.00001C22.7463 4.56262 22.5228 5.10219 22.125 5.50001L12.625 15L8.625 16L9.625 12L19.125 2.50001Z"
                stroke="#624DE3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => handleDelete(item["Tracking ID"])}
            className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.625 6H5.625H21.625"
                stroke="#A30D11"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.625 6V4C8.625 3.46957 8.83571 2.96086 9.21079 2.58579C9.58586 2.21071 10.0946 2 10.625 2H14.625C15.1554 2 15.6641 2.21071 16.0392 2.58579C16.4143 2.96086 16.625 3.46957 16.625 4V6M19.625 6V20C19.625 20.5304 19.4143 21.0391 19.0392 21.4142C18.6641 21.7893 18.1554 22 17.625 22H7.625C7.09457 22 6.58586 21.7893 6.21079 21.4142C5.83571 21.0391 5.625 20.5304 5.625 20V6H19.625Z"
                stroke="#A30D11"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.625 11V17"
                stroke="#A30D11"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.625 11V17"
                stroke="#A30D11"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRaw;

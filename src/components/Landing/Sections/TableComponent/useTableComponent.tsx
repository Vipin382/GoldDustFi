import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { Person } from "../../../../constant";

const AreaSmallChart = React.lazy(() => import('./AreaSmallChart'));

const useTableComponent = () => {
  const columns = React.useMemo<ColumnDef<Person, any>[]>(
    () => [
      {
        accessorKey: "NO",
        header: () => (
          <span className="flex dark:text-white dark:text-opacity-60 items-center justify-center font-RobotoMedium text-base text-[#808080] py-6">
            NO
          </span>
        ),
        cell: (info) => (
          <div className="text-[#2B2B2B] dark:text-white dark:text-opacity-60 font-RobotoRegular text-base text-center w-full">
            {info.getValue()}
          </div>
        ),
      },
      {
        accessorFn: (row) => `${row.NAME.ICON_NAME} ${row.NAME.SORT_NAME}`,
        id: "NAME",
        header: () => (
          <span className="flex items-center dark:text-white dark:text-opacity-60 justify-center font-RobotoMedium text-base text-[#808080] py-6 w-[400px]">
            NAME
          </span>
        ),
        cell: (info) => {
          return (
            <div className="flex justify-around items-center text-[#2B2B2B] dark:text-white dark:text-opacity-60 font-RobotoRegular text-base">
              <div >
                <img src={info.row.original.NAME.IMG_SRC} alt="loading..." />
              </div>
              <div>{info.row.original.NAME.ICON_NAME}</div>
              <div className="border h-10 dark:border-white dark:border dark:border-opacity-10"></div>
              <div>{info.row.original.NAME.SORT_NAME}</div>
            </div>
          );
        },
      },
      {
        accessorKey: "LAST_PRICE",
        header: () => (
          <span className="flex dark:text-white dark:text-opacity-60 items-center justify-center font-RobotoMedium text-base text-[#808080] py-6">
            LAST PRICE
          </span>
        ),
        cell: (info) => (
          <div className="text-[#2B2B2B] dark:text-white dark:text-opacity-60 font-RobotoRegular text-base text-center w-full">
            {info.renderValue()}
          </div>
        ),
      },
      {
        accessorKey: "CHANGE",
        header: () => (
          <span className="flex items-center dark:text-white dark:text-opacity-60 justify-center font-RobotoMedium text-base text-[#808080] py-6">
            CHANGE
          </span>
        ),
        cell: (info) => (
          <div className="text-[#2B2B2B] dark:text-white dark:text-opacity-60 font-RobotoRegular text-base text-center w-full">
            {info.getValue()}
          </div>
        ),
      },
      {
        accessorKey: "MARKET_STATS",
        header: () => {
          return (
            <span className="flex items-cente dark:text-white dark:text-opacity-60 justify-center font-RobotoMedium text-base text-[#808080] py-6">
              {"MARKET STATS"}
            </span>
          );
        },
        cell: (info) => {
          return <AreaSmallChart chartData={info.getValue()} />;
        },
      },
      {
        accessorKey: "TRADE",
        header: () => (
          <span className="flex items-center dark:text-white dark:text-opacity-60 justify-center font-RobotoMedium text-base text-[#808080] py-6">
            TRADE
          </span>
        ),
        cell: (info) => (
          <div className="text-[#2B2B2B] dark:text-white dark:text-opacity-60 font-RobotoRegular text-base text-center w-full">
            <button
              className={`bg-blue-500 dark:bg-[#0fae96] text-white px-4 py-2 rounded-lg font-RobotoRegular text-base`}
            >
              {info.getValue().toUpperCase()}
            </button>
          </div>
        ),
      },
    ],
    []
  );
  return [columns];
};
export default useTableComponent;

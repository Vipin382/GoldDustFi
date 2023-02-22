import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getSortedRowModel,
  FilterFn,
} from "@tanstack/react-table";
import React, { useState } from "react";

import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import { defaultData } from "../../../constant";
import useTableComponent from "./TableComponent/useTableComponent";

const Table = React.lazy(() => import("./TableComponent/Table"));

//Declaring Metadat and FilterFNS Interface
declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

//Fuzzy filter function
const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({
    itemRank,
  });
  return itemRank.passed;
};

const TableSection = () => {
  const [data, setData] = React.useState(() => [...defaultData]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columns] = useTableComponent();
  const [seeAll, setShowAll] = useState(false);

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  });

  return (
    <div className="flex dark:bg-[#120120]  justify-center items-center px-6 lg:px-12 xl:px-24 py-[70px] lg:py-[117px] flex-col gap-8 ">
      <div className="p-2 py-4 overflow-x-auto min-w-[250px] max-w-full">
        <h3 className="w-full font-RalewayBold text-xl md:text-2xl lg:text-4xl text-[#0D3E36] dark:text-[#0fae96]">
          Market Update
        </h3>
        <div className="w-full flex flex-col gap-4">
          <p className="w-full font-RobotoMedium md:text-lg text-[#0D3E36]">
            Cryptocurrency Categories
          </p>
          <Table
            table={table}
            setGlobalFilter={setGlobalFilter}
            globalFilter={globalFilter}
          />
        </div>
      </div>
      <div className={`w-full ${seeAll ? "hidden" : null}`}>
        <p
          className={`cursor-pointer underline text-[#0799FF] dark:text-[#0fae96]`}
          onClick={() => setShowAll(true)}
        >
          See All Coins
        </p>
      </div>
    </div>
  );
};

export default TableSection;

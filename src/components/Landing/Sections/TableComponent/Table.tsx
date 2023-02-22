import { flexRender, Table } from "@tanstack/react-table";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { motion, AnimatePresence, spring } from "framer-motion";

interface TableInterface {
  table: Table<any>;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
  globalFilter: string;
}

const ReactTable: React.FC<TableInterface> = ({
  table,
  setGlobalFilter,
  globalFilter,
}) => {
  return (
    <>
      <div className="flex w-full justify-between">
        <div className="flex">
          <Tab.Group>
            <Tab.List className={"flex items-center justify-center gap-3"}>
              {[
                "Popular",
                "Metaverse",
                "Entertainment",
                "Music",
                "See All 12+",
              ].map((item, index) => {
                return (
                  <Tab as={Fragment} key={index}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected
                            ? "bg-blue-500 text-white shadow-lg dark:bg-white dark:bg-opacity-90 dark:text-[#120120]"
                            : "bg-white text-black shadow-lg dark:border-white dark:border dark:border-opacity-10 dark:bg-white dark:bg-opacity-[0.02]"
                        } w-[90px] h-[30px] lg:w-[102px] lg:h-[40px] dark:text-white dark:text-opacity-60 rounded font-RobotoRegular text-sm lg:text-base`}
                      >
                        {item}
                      </button>
                    )}
                  </Tab>
                );
              })}
            </Tab.List>
          </Tab.Group>
        </div>
        <label className="relative flex items-center ml-4 ">
          <label
            className="absolute h-full flex items-center w-10 justify-center"
            htmlFor="search"
          >
            <AiOutlineSearch className="text-[30px] text-stone-400 cursor-pointer" />
          </label>
          <input
            type="search"
            placeholder="search..."
            className="px-10 min-w-[200px] max-w-[200px] xl:min-w-[300px] xl:max-w-[300px] w-full h-[30px] xl:h-[50px] rounded outline-none ring-1 focus:ring-[#0D9BFF] dark:ring-[#120120] dark:border-white dark:border dark:border-opacity-10 dark:bg-white dark:bg-opacity-[0.02]"
            id="search"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(String(e.target.value))}
          />
        </label>
      </div>
      <div className=" w-full">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="w-60 border dark:border-white dark:border dark:border-opacity-10"
                  >
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <AnimatePresence>
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, y: 0.5 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5 }}
                  className="border dark:border-white dark:border dark:border-opacity-10"
                >
                  {row.getVisibleCells().map((cell) => (
                    <motion.td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </motion.td>
                  ))}
                </motion.tr>
              </AnimatePresence>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReactTable;

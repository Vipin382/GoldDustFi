import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
} from "@chakra-ui/react";

type MarketStatisticType = {
  Amount: string;
  FooterText: string;
};

const MarketStat: React.FC<MarketStatisticType> = (props) => {
  return (
    <div>
      <h1 className="text-[#0096FF] dark:text-[#0fae96] text-sm sm:text-base md:text-2xl lg:text-4xl font-NunitoBold text-center">
        {props.Amount}
      </h1>
      <div className="flex items-center justify-evenly">
        <p className="lg:text-lg text-[8px] sm:text-xs md:text-base flex items-center gap-2 text-stone-500 dark:text-white font-NunitoRegular text-center">
          {props.FooterText}
        </p>
        <span className="cursor-pointer relative text-white">
          <Popover preventOverflow placement="top" arrowSize={50}>
            <PopoverTrigger>
              <AiFillInfoCircle className="text-[#9E9E9E] text-xs md:text-lg dark:text-white" />
            </PopoverTrigger>
            <PopoverContent className="shadow-lg bg-[#0096FF] m-4 max-w-[150px] rounded p-2 z-50">
              <PopoverHeader className="border-b-2 flex justify-between text-sm">
                Confirmation!
                <PopoverCloseButton className="text-xs" />
              </PopoverHeader>
              <PopoverBody className="text-sm">
                Are you sure you want to have that milkshake?
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </span>
      </div>
    </div>
  );
};

export default MarketStat;

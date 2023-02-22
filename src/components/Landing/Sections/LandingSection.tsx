import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiFillInfoCircle } from "react-icons/ai";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
} from "@chakra-ui/popover";

const LandingSection = () => {
  return (
    <section className="px-[6px] dark:bg-[#120120] sm:px-[12px] md:px-[24px] lg:px-[48px] w-full flex justify-center items-center h-[80vw] md:h-[500px]">
      <div className="flex flex-col gap-2 sm:gap-6 md:gap-10 justify-center items-center">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0D3E36] dark:text-white font-bold font-RalewayBold text-center">
            Start and Build Your Crypto
            <span className="text-[#0799FF] dark:text-[#0fae96]">
              Portfolio
            </span>
            Here
          </h3>
        </div>
        <div>
          <h3 className="text-[#0799FF] dark:text-[#0fae96] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-RobotoBold">
            $127,224,678.96
          </h3>
          <div className="flex items-center justify-center gap-1">
            <p className="text-[#4D625F] text-xs dark:text-white sm:text-sm md:text-lg font-RobotoRegular flex justify-center items-center gap-2">
              Total Liquidity Available
            </p>
            <span className="cursor-pointer relative text-white">
              <Popover preventOverflow placement="top" arrowSize={50}>
                <PopoverTrigger>
                  <AiFillInfoCircle className="text-[#9E9E9E] dark:text-white" />
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
        <div>
          <button className="py-2 px-6 md:py-4 sm:py-2 sm:px-10 md:px-20 bg-[#0096FF] dark:bg-[#0fae96] text-white rounded-lg text-xs md:text-base">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;

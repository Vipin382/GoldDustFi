import React from "react";

const GetStartedSection = () => {
  return (
    <>
      <div className="px-6 md:px-12 lg:px-24 dark:bg-[#120120]">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
          <div className="lg:max-w-[500px] flex items-center gap-3 lg:items-start flex-col lg:gap-4 w-[100%] lg:px-0 px-8 lg:h-48">
            <h3 className="text-[#0D3E36] lg:text-4xl font-RalewayBold dark:text-white">
              How To Get Started
            </h3>
            <p className="text-[#0D3E36] text-sm lg:text-lg font-RobotoRegular lg:text-left text-center dark:text-white dark:text-opacity-60">
              Simple and easy way to start your investment in cryptocurrency &
              other digital assets
            </p>
            <button className="bg-[#0096FF] dark:bg-[#0fae96] text-white h-6 rounded-sm lg:rounded text-xs lg:text-base w-28 lg:w-40 lg:h-9">
              Get Started
            </button>
          </div>
          <div className="flex flex-col gap-3 lg:gap-5 lg:max-w-[500px] w-full">
            {[1, 2, 3].map((item, index) => {
              return (
                <div
                  key={item}
                  className="border shadow-xl flex flex-col justify-center px-8 rounded-xl h-[60px] lg:h-[100px] dark:border-white dark:border dark:border-opacity-10 dark:bg-white dark:bg-opacity-[0.02]"
                >
                  <h6 className="font-RalewaySemiBold text-sm md:text-base lg:text-xl dark:text-white">
                    Click On Get Started
                  </h6>
                  <p className="font-RobotoRegular text-xs md:text-sm lg:text-base text-[#808080]">
                    Your account and personal identity are guaranteed safe
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedSection;

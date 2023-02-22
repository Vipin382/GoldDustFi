import { CardTag, GridData } from "../../../constant";

const LearnCrypto = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-5 hidden xsm:block dark:bg-[#120120]">
      <div className=" flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:gap-4">
          <h3 className="text-center font-RobotoBold text-[#0D3E36] xsm:text-xl sm:text-2xl md:text-4xl dark:text-white">
            Learn About Cryptocurrency
          </h3>
          <p className="text-center font-RobotoRegular text-xs sm:text-sm md:text-lg text-[#0D3E36] dark:text-white dark:text-opacity-60">
            Learn all about cryptocurrency to start investing
          </p>
        </div>
        <div className="border dark:border-white dark:border-opacity-10 grid grid-cols-[repeat(2,minmax(0,1fr))] md:grid-cols-[repeat(3,minmax(0,1fr))] lg:grid-cols-[repeat(3,minmax(250px,1fr))] xl:grid-cols-[repeat(4,minmax(250px,1fr))] min-h-[1000px] md:min-h-[110vw] lg:min-h-[1200px] xl:min-h-[900px] gap-2 lg:gap-5 p-2 lg:p-5 grid-rows-4 md:grid-rows-3 xl:grid-rows-2">
          <div className="border dark:border-white dark:border-opacity-10 rounded-xl shadow-xl col-span-2 bg-[url(/eth.jpg)] bg-center bg-cover"></div>
          {GridData.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-xl shadow-xl flex flex-col overflow-hidden hover:ring-blue-600 lg:min-h-[400px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-[0.02]"
              >
                <div className={`border h-2/4 dark:border-white dark:border-opacity-10`}>
                  <img
                    src={`${item.IMG}`}
                    className="w-full h-full"
                    alt="loading..."
                  />
                </div>
                <div className="h-2/4 p-5 flex flex-col gap-2 lg:gap-3 items-start ">
                  <div
                    className={`font-RobotoMedium text-[8px] lg:text-xs ${
                      item.TAG === CardTag.GREEN
                        ? "text-[#0FAE96]"
                        : "text-[#511281]"
                    } ${
                      item.TAG === CardTag.GREEN
                        ? "bg-[#0fae963a]"
                        : "bg-[#5112813c]"
                    } p-[0.15rem] lg:p-1 rounded w-auto cursor-pointer active:${
                      item.TAG === CardTag.GREEN
                        ? "bg-[#0FAE9]"
                        : "bg-[#511281]"
                    } active:text-white`}
                  >
                    {item.TAG}
                  </div>
                  <h3 className="font-RalewaySemiBold text-sm lg:text-base text-ellipsis dark:text-white">
                    {item.Heading}
                  </h3>
                  <p className="text-[#808080] text-sm font-RobotoRegular hidden lg:block">
                    {item.CONTENT}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <p className="text-[#0096FF] underline font-RalewaySemiBold cursor-pointer dark:text-[#0fae96] ">
            See All Articles
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnCrypto;

import { MarketStaticData, MarketTrendData } from "../../../constant";
import MarketStat from "../MarketStat";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { BsArrowUpRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MiniCharts from "../../common/MiniCharts";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Badge, VStack, HStack, Box } from "@chakra-ui/layout";

const StatisticSection = () => {
  return (
    <>
      <HStack className="h-[85px] dark:bg-[#120120] w-full px-[6px] sm:px-[12px] md:px-[24px] lg:px-[48px] flex justify-between items-center">
        {MarketStaticData.map((item, index) => {
          return (
            <MarketStat
              key={index}
              Amount={item.Amount}
              FooterText={item.Footer}
            />
          );
        })}
      </HStack>
      <section className="h-[244px] w-full px-[24px] md:px-[48px] dark:bg-[#120120] dark:text-white">
        <h1 className="md:text-[24px] text-[18px] font-RalewaySemiBold">Market Trend</h1>
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {MarketTrendData.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="border-[#0799FF] dark:bg-white dark:bg-opacity-[0.02] dark:border-white dark:border dark:border-opacity-10 rounded-lg min-h-[157px] md:min-h-[187px] min-w-[197px] md:min-w-[297px] shadow-2xl"
                >
                  <Card gap={5} p={20}>
                    <CardHeader className="flex justify-between items-center">
                      <HStack>
                        <div className="w-8 md:w-11">
                          <Image
                            borderRadius="full"
                            src={item.Icon}
                            alt={`${item.Sort}`}
                          />
                        </div>
                        <h1 className="font-RalewaySemiBold text-base md:text-lg">
                          {item.Sort}
                        </h1>
                        <Badge
                          colorScheme="default"
                          className="md:text-[10px] text-[8px] bg-[#e1dede] p-1 rounded font-RalewaySemiBold dark:text-[#120120]"
                        >
                          {item.Coin}
                        </Badge>
                      </HStack>
                      <BsArrowUpRight className="text-[#808080] md:text-2xl" />
                    </CardHeader>
                    <CardBody className="border"></CardBody>
                    <CardFooter>
                      <HStack className="w-full justify-between">
                        <VStack>
                          <h1 className="ftext-[24px] font-RalewayMedium">
                            {item.Value}
                          </h1>
                          <p className="text-[18px] text-[#808080] w-full font-RobotoMedium">
                            {item.Percentage}
                          </p>
                        </VStack>
                        <div className="border-black">
                          <MiniCharts />
                        </div>
                      </HStack>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default StatisticSection;

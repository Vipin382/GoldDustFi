import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/card";
import { Heading, Text, Divider, Box, HStack, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FeatureData } from "../../../constant";

const FeatureSection = () => {
  return (
    <Box className="min-h-[632px] flex items-center justify-center px-6 md:px-12 lg:p-24 dark:bg-[#120120]">
      <VStack className="gap-[49px] lg:gap-[69px]">
        <Box className="flex flex-col gap-[8px] md:gap-[10px]">
          <h3 className="text-[#0D3E36] md:text-4xl font-RalewayBold text-center dark:text-white">
            GoldDust.
            <span className="text-[#0D9BFF] dark:text-[#0fae96] ">fi</span>{" "}
            Amazing{" "}
            <span className="text-[#0D9BFF] dark:text-[#0fae96] ">
              Features
            </span>
          </h3>
          <p className="text-[#4D625F] font-RobotoRegular text-sm md:text-lg text-center dark:text-gray-400">
            Explore sensational features to prepare your best investment in
            cryptocurrency
          </p>
        </Box>
        <HStack className="flex justify-center gap-4 flex-wrap">
          {FeatureData.map((item, index) => {
            return (
              <Card
                rounded={18}
                py={30}
                pl={28}
                pr={30}
                key={index}
                className="shadow-2xl rounded-lg flex flex-col justify-between min-w-[250px] w-full max-w-[400px] gap-4 xsm:h-[236px] xsm:gap-10 dark:border-white dark:border dark:border-opacity-10 dark:bg-white dark:bg-opacity-[0.02]"
              >
                <CardHeader>
                  <Heading
                    color={"#2B2B2B"}
                    className="xsm:text-[20px] text-sm font-RalewaySemiBold dark:text-white"
                  >
                    {item.Header}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    color={"#808080"}
                    className="xsm:text-base text-xs font-RobotoRegular dark:text-gray-400"
                  >
                    {item.Content}
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme="teal"
                    variant="outline"
                    className="text-[#0D9BFF] font-RalewayMedium text-xs xsm:text-lg dark:text-[#0fae96]"
                  >
                    See Explained
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </HStack>
      </VStack>
    </Box>
  );
};

export default FeatureSection;

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LandingSection from "../components/Landing/Sections/LandingSection";
import StatisticSection from "../components/Landing/Sections/StatisticSection";
import FeatureSection from "../components/Landing/Sections/FeatureSection";
import TableSection from "../components/Landing/Sections/TableSection";
import LearningSection from "../components/Landing/Sections/LearningSection";
import GetStartedSection from "../components/Landing/Sections/GetStartedSection";
import LearnCrypto from "../components/Landing/Sections/LearnCrypto";

const GoldDustLanding = () => {
  return (
    <>
      <div>
        <LandingSection />
        <StatisticSection />
      </div>
      <FeatureSection />
      <TableSection />
      <LearningSection />
      <GetStartedSection />
      <LearnCrypto />
    </>
  );
};

export default GoldDustLanding;

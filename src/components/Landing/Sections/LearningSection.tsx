const LearningSection = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-10 lg:py-16 dark:bg-[#120120]">
      <div className="border flex shadow-lg justify-between p-8 rounded-lg items-center lg:flex-row flex-col dark:border-white dark:border dark:border-opacity-10 dark:bg-white dark:bg-opacity-[0.02]">
        <div className="lg:max-w-[536px]">
          <h5 className="font-RalewaySemiBold text-sm md:text-xl lg:text-2xl text-[#2B2B2B] text-center lg:text-left dark:text-white">
            New In CryptoCurrency?
          </h5>
          <p className="font-RobotoRegular text-xs md:text-sm lg:text-lg text-[#808080] py-4 text-center lg:text-left">
            We'll tell you what cryptocurrencies are, how they work and why you
            should own one right now. So let's do it.
          </p>
        </div>
        <div>
          <button className="px-2 py-2 md:px-4 md:py-2 lg:py-4 lg:px-6 text-xs md:text-base rounded bg-[#0096FF] text-white dark:bg-[#0fae96] dark:text-[#120120]">
            Learn & Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningSection;

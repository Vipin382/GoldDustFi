import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#0799FF] dark:bg-[#0fae96] origin-top-left"
        style={{ scaleX }}
      />
    </>
  );
};

export default ScrollProgress;

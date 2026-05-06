'use client';

import { transitionVariantsPage } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="
            fixed top-0 bottom-0 right-full 
            w-screen z-30 
            bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]
          "
          variants={transitionVariantsPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        />
      </div>
    </AnimatePresence>
  );
};

export default TransitionPage;
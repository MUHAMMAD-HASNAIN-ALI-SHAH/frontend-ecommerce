"use client";
import { motion } from "framer-motion";

const ExclusiveDeals = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white font-bold text-5xl text-center"
      >
        Exclusive Deals Every Day
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-white text-xl"
      >
        Save big with flash sales and limited-time offers
      </motion.h2>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-blue-500 px-4 py-3 bg-white w-[150px] rounded-xl cursor-pointer"
      >
        View Deals
      </motion.button>
    </div>
  );
};

export default ExclusiveDeals;

"use client";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="w-full flex justify-center bg-blue-800">
      <div className="w-[1200px] min-h-screen flex items-center pt-10">
        <div className="flex flex-col gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left text-white font-bold text-5xl"
          >
            Welcome to Shopnetic
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left text-white text-xl"
          >
            Discover amazing products at unbeatable prices
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-blue-500 px-4 py-5 bg-white w-[150px] rounded-xl cursor-pointer"
          >
            Shop Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

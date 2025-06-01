// ProductCarousel.tsx
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Carousel as UiCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProductCarousel() {
  return (
    <UiCarousel className="w-full h-full flex justify-left items-center">
      <CarouselContent className="w-full h-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white font-bold text-5xl flex flex-col items-center justify-center"
              >
                Welcome to Shopnetic
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white text-xl"
              >
                Discover amazing products at unbeatable prices
              </motion.h2>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-blue-500 px-4 py-3 bg-white w-[150px] rounded-xl cursor-pointer"
              >
                Shop Now
              </motion.button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-[15px]" />
      <CarouselNext className="right-[15px]" />
    </UiCarousel>
  );
}

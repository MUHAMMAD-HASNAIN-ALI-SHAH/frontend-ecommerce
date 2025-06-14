"use client";
import React from "react";
import { products } from "../../data/products";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

const FeatureProducts = () => {
  const featuredProducts = products.filter((product) => product.isHotSale);

  return (
    <div className="w-full flex flex-col justify-center items-center bg-gray-5 py-5">
      <h1 className="text-center font-bold text-3xl">Features Products</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="my-3">
            {featuredProducts.map((feature, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 w-full"
              >
                <div className="p-4">
                  <div>
                    <ProductCard product={feature} />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="top-0 left-[15px]" />
          <CarouselNext className="top-0 right-[15px]" />
        </Carousel>
      </motion.div>
    </div>
  );
};

export default FeatureProducts;

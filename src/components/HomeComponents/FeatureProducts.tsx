"use client"
import React from "react";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const FeatureProducts = () => {
  const featuredProducts = products
    .filter((product) => product.isHotSale)
    .slice(0, 4);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1200px] flex items-center">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Products
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
            <div className="text-center mt-12">
              <button className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                View All Products
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default FeatureProducts;

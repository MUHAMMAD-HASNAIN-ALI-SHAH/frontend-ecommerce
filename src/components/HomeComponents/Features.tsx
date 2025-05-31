"use client";
import React from "react";
import {
  TruckIcon,
  ShieldCheckIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    icon: <TruckIcon className="h-12 w-12 text-blue-600" />,
    title: "Free Shipping",
    description: "Free shipping on all orders over $50",
  },
  {
    icon: <ShieldCheckIcon className="h-12 w-12 text-blue-600" />,
    title: "Quality Guarantee",
    description: "30-day money-back guarantee on all products",
  },
  {
    icon: <LockClosedIcon className="h-12 w-12 text-blue-600" />,
    title: "Secure Payment",
    description: "Your payment information is encrypted and secure",
  },
];

const Features = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1200px] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

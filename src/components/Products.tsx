"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { PinContainer } from "./3d-pin";

export const Products = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <div key={product.href} className="lg:min-h[32.5rem h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
              <PinContainer title={product.title} href={product.href}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]">
                  
                  <Image
                    src={product.thumbnail}
                    alt="thumbnail"
                    height="200"
                    width="200"
                    className="rounded-md"
                  />
                
                </div>
                <Heading as="h4" className="font-bold text-gray-300 text-lg md:text-lg lg:text-lg">
                    {product.title}
                  </Heading>
                <Paragraph className="text-sm text-white md:text-sm lg:text-sm mt-2 max-w-xl">
                    {product.description}
                  </Paragraph>
                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconList.map((icon) => (
                        <div key={icon} className="border border-white/[0.2]">
                          <img src={icon} alt={icon} className="p-2"/>
                        </div>
                      ))}
                    </div>
                  </div>
              </PinContainer>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

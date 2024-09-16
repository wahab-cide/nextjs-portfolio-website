import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Python",
      src: "/python.svg",

      className: "h-10 w-14 filter brightness-125",
    },
    {
      title: "Java",
      src: "/Java.svg",

      className: "h-10 w-14 filter brightness-125",
    },
    {
      title: "Next.js",
      src: "/WebStorm.svg",

      className: "h-10 w-14 filter brightness-125",
    },
    {
      title: "React",
      src: "/images/logos/react.png",

      className: "h-10 w-14 filter brightness-125",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",

      className: "h-10 w-8 filter brightness-125",
    },
    {
      title: "Node",
      src: "/Node.js.svg",

      className: "h-10 w-12 filter brightness-125",
    },
    {
      title: "Git",
      src: "/Git.svg",

      className: "h-10 w-24 filter brightness-125",
    },
    {
      title: "Tailwind",
      src: "/Tailwind CSS.svg",

      className: "h-10 w-24 filter brightness-125",
    },
    {
      title: "Tensorflow",
      src: "Keras.svg",

      className: "h-10 w-24 filter brightness-125",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-bold text-gray-100 text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};

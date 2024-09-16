import React from "react";

import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

export const Paragraph = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={twMerge(
        "text-xl lg:text-base md:text-sm font-normal text-secondary mt-4",
        className
      )}
    >
      {children}
    </p>
  );
};

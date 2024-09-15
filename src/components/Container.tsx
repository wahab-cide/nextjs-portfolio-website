'use client';
import React, { useEffect } from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.documentElement.classList.add('dark');  // Force dark mode globally
  }, []);
  return (
    <main className={`max-w-4xl w-full mx-auto py-20 px-4 md:px-10`}>
      {children}
    </main>
  );
};

import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";


const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Wahab - Developer",
  description: "Wahab is a student, developer and creator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <html lang="en">
        <body
          className={twMerge(
            inter.className,
            "flex antialiased h-screen overflow-hidden bg-"
          )}
        >
          <Sidebar />
          <div className="lg:pl-2 lg:pt-2 bg- flex-1 overflow-y-auto">
            <div className="flex-1 bg- min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-800 overflow-y-auto">
              {children}

            </div>
          </div>
        </body>
      </html>
    
  );
}
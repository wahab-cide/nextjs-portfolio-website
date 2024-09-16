// Purpose: Main page of the app. Contains introduction, education, and projects sections.

import { BackgroundBeams } from "@/components/background-beams";
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="h-full w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Container>
            <SidebarHeader />
            {/* Heading for introduction */}
            <Heading className=" text-4xl lg:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              Hi, I&apos;m <Highlight className="text-green-400">Wahab</Highlight>
            </Heading>

            {/* Paragraph about education */}
            <Paragraph className=" max-w-xl mt-4 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-200">
              I&apos;m a student at{" "}
              <Highlight className="text-[#ab47bc] font-bold">Williams College</Highlight> studying Computer Science and Mathematics.
            </Paragraph>

            {/* Paragraph about career goals */}
            <Paragraph className="max-w-xl mt-4 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-200 ">
              I&apos;m also a <Highlight className=" bg-blue-200 px-2 py-0.25 rounded-full font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-950 to-blue-600 filter brightness-125">fullstack </Highlight>software developer
      passionate about building scalable web apps and learning new technologies.
            </Paragraph>

            {/* Section header for projects */}
            <Heading
              as="h2"
              className="font-bold  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-200 text-lg md:text-xl lg:text-2xl mt-20 mb-4"
            >
              My most <Highlight className="text-[#ab47bc]">recent projects</Highlight>
            </Heading>
            
            {/* Products and TechStack sections */}
            <Products />
            <TechStack />
            
              {/* Background beams */}
              
          </Container>
        </div>  
  );
}


const SidebarHeader = () => {
  return (
    <div className=" ">
      <Image
        src="/images/Profile-photo.jpg"
        alt="Avatar"
        height="50"
        width="50"
        className="object-cover object-top rounded-md flex-shrink-0 mb-2 filter brightness-125"
      />
    </div>
  );
};
// Purpose: Main page of the app. Contains introduction, education, and projects sections.


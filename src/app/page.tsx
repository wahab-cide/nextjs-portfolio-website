// Purpose: Main page of the app. Contains introduction, education, and projects sections.

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
    <Container>
      {/* Heading for introduction */}
      <Heading className="font-gray text-4xl lg:text-5xl">
        Hi, I&apos;m <Highlight className="text-green-400">Wahab</Highlight>
      </Heading>

      {/* Paragraph about education */}
      <Paragraph className="text-gray-500 max-w-xl mt-4">
        I&apos;m a student at{" "}
        <Highlight className="text-purple-600">Williams College</Highlight> studying Computer Science and Mathematics.
      </Paragraph>

      {/* Paragraph about career goals */}
      <Paragraph className="text-gray-500 max-w-xl mt-4">
        I&apos;m also a <Highlight className="text-blue-600">fullstack software developer</Highlight> passionate about building scalable web apps and learning new technologies.
      </Paragraph>

      {/* Section header for projects */}
      <Heading
        as="h2"
        className="font-black text-gray-500 text-lg md:text-xl lg:text-2xl mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      
      {/* Products and TechStack sections */}
      <Products />
      <TechStack />
    </Container>
  );
}

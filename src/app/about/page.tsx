import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

import { motion } from "framer-motion";
import About from "@/components/About";
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";

export const metadata: Metadata = {
  title: "About | Abdul Wahab",
  description:
    "Abdul Wahab is a student, developer and creator.",
};

export default function AboutPage() {
  const images = [
  ];
  return (
    <BackgroundBeamsWithCollision>
      <Container>
        <Heading className="font-black text-white">About Me</Heading>
        <About />
      </Container>
    </BackgroundBeamsWithCollision>
  );
}

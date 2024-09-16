import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Heading className="font-bold text-white">Work History</Heading>
      <Paragraph className="max-w-xl mt-4 text-gray-300">
      I&apos;m a <Highlight className="text-blue-600">fullstack software developer</Highlight> 
      passionate about building scalable web apps and learning new technologies.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4 text-gray-300">
      My past experineces have been outside of the tech industry, but I have always been interested in technology.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Wahab Cide",
  description:
    "Wahab is a developer, writer, and creator.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
     
      <Heading className="font-black text-white pb-4">My writings on technology</Heading>
      <Paragraph className="pb-10 text-white">
       In my spare time, I research on how AI can be used to to solve water quality problems, improve agriculture, and food production in the most deprived parts of the world.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}

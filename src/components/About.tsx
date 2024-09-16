"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <>
    <Paragraph className=" mt-4">
      Hey there, I&apos;m Abdul Wahab - a passionate developer, avid reader,
      and a content creator. Welcome to my corner of the
      creative world!
    </Paragraph>
    <Paragraph className=" mt-4">
      I&apos;m also a content creator and a podcast host. Each week I host a podcast 
      episode with Students at my college to discuss career paths and college life.
    </Paragraph>
    <Paragraph className=" mt-4">
      I also love writing and sharing my thoughts on various topics. I write about my 
      childhood experiences, background, and my journey as a developer and a content creator. 
      But I wont't be able to write if I didn't spend a lot of time reading.
      I read all kinds of stuff from fiction to autobiographies. My current favorite books 
      are Game of Thrones by George R.R. Martin and Moby Dick by Herman Melville.
    </Paragraph>
    <Paragraph>
      I also listen to a lot of podcasts and audiobooks. Whenever I can't make time to read a book, 
      I will listen to the audiobook on Audible. My kind of podcasts to listen to are true crime, documentries, and comedy.
      My current favorite podcast is The Trojan Horse Affair by Serial Productions and The New York Times.
    </Paragraph>
  </>);
}
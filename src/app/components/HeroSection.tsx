"use client";

import Image from "next/image";


export default function HeroSection() {
  return (
    <section className="relative">
      <div className="relative w-full h-[295px]">
        <Image
          src="/images/pexels-agk42-2599244.jpg"
          alt="Hero Banner"
          width={1298}
          height={295} 
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to TechBlog</h1>
        <p className="text-lg md:text-xl mt-4">
          Discover the latest in technology, tutorials, and trends.
        </p>
      </div>

    </section>
  );
}

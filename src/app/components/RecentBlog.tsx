"use client";

import Image from "next/image";
import Link from "next/link";

export default function RecentBlogPost() {
  const blogs = [
    {
      slug: "ai-advancements-2025",
      image: "/images/AI-in-2025-and-Beyond.webp",
      date: "December 30, 2024",
      title: "AI Advancements in 2025",
      description:
        "In this post, we explore the latest breakthroughs in artificial intelligence and how they are revolutionizing industries in 2024.",
    },
    {
      slug: "rise-of-5g-technology",
      image: "/images/5g-tecknology.jpeg",
      date: "December 29, 2024",
      title: "The Rise of 5G Technology",
      description:
        "5G technology is expected to change the way we live and work. This post discusses the potential of 5G and its impact on industries worldwide.",
    },
    {
      slug: "tech-trends-2025",
      image: "/images/tech-trends-2025.jpg",
      date: "December 28, 2024",
      title: "Tech Trends to Watch in 2025",
      description:
        "As we approach 2025, many exciting tech trends are on the horizon. From AI advancements to quantum computing, we explore the upcoming innovations.",
    },
    {
      slug: "quantum-computing-2025",
      image: "/images/quantum-computing.png",
      date: "December 28, 2024",
      title: "Quantum Computing in 2025: Transform Technology",
      description:
        "As we step into 2025, quantum computing is set to redefine technology. With advancements in qubit stability and quantum algorithms, this cutting-edge field is solving problems once deemed impossible.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div key={blog.slug} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              width={592}
              height={228}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-600 text-sm">{blog.date}</p>
              <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
              <Link href={`/blog/${blog.slug}`}>
                <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

  
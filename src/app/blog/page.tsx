"use client";

import Link from "next/link";

type BlogData = {
  [key: string]: {
    title: string;
    slug: string;
  };
};

const blogData: BlogData = {
  "ai-advancements-2025": {
    title: "AI Advancements in 2025",
    slug: "ai-advancements-2025",
  },
  "rise-of-5g-technology": {
    title: "The Rise of 5G Technology",
    slug: "rise-of-5g-technology",
  },
  "tech-trends-2025": {
    title: "Tech Trends to Watch in 2025",
    slug: "tech-trends-2025",
  },
  "quantum-computing-2025": {
    title: "Quantum Computing in 2025: Transform Technology",
    slug: "quantum-computing-2025",
  },
};

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {Object.entries(blogData).map(([slug, { title }]) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

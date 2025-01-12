"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import CommentSection from "@/app/components/Comment";

type BlogData = {
  [key: string]: {
    date: string;
    title: string;
    image: string;
    description: string;
    details: { heading: string; paragraph: string }[];
  };
};

const blogData: BlogData = {
  "ai-advancements-2025": {
    date: "December 31, 2024",
    title: "AI Advancements in 2025",
    image: "/images/AI-in-2025-and-Beyond.webp",
    description: `Artificial intelligence in 2025 is poised to revolutionize industries...`,
    details: [
      {
        heading: "Revolution in Healthcare",
        paragraph:
          "AI is making significant strides in healthcare, with advanced tools that help doctors diagnose diseases more quickly and accurately than ever before. AI algorithms can analyze medical images, genetic data, and patient histories to provide personalized treatment recommendations. This has the potential to save lives by detecting diseases in their early stages, when treatment is most effective. With AI-powered systems, healthcare providers are also improving operational efficiency by automating routine tasks and predicting patient outcomes. These advancements are improving patient care, reducing wait times, and ultimately making healthcare more accessible to all.",
      },
      {
        heading: "Education Gets Smarter",
        paragraph:
          "The education sector is experiencing a transformation with the introduction of AI-powered tools designed to enhance the learning experience. AI tutors offer personalized instruction to students, adapting to their individual learning paces and styles. These tutors can provide real-time feedback and identify areas where students need additional help. Adaptive learning platforms use data analytics to optimize educational content and provide tailored lesson plans. Moreover, AI can streamline administrative tasks, allowing educators to focus more on teaching and less on paperwork. As AI technology continues to evolve, it promises to make education more accessible, efficient, and effective for learners around the globe.",
      },
      {
        heading: "Global Logistics Optimized",
        paragraph:
          "AI is revolutionizing logistics by optimizing global supply chains, improving efficiency, and reducing environmental impact. Through the use of AI-driven predictive analytics, companies can forecast demand more accurately and adjust production schedules accordingly. AI also enables the automation of warehousing and inventory management, reducing human error and speeding up operations. In transportation, AI algorithms are being used to optimize delivery routes, improving fuel efficiency and minimizing delays. AI is also playing a crucial role in sustainability efforts by reducing waste and carbon emissions in logistics operations. As global trade continues to grow, AI will be essential for meeting the increasing demands of the logistics industry while minimizing environmental footprints.",
      },
    ],
  },
  "rise-of-5g-technology": {
    date: "January 5, 2025",
    title: "The Rise of 5G Technology",
    image: "/images/5g-tecknology.jpeg",
    description: `5G technology is setting new standards in communication...`,
    details: [
      {
        heading: "Speed Beyond Imagination",
        paragraph:
          "5G technology is set to revolutionize how we connect and communicate. It promises speeds that far exceed anything we’ve seen before, offering download speeds that are 100 times faster than 4G. This leap in speed will enable real-time data transfer, making experiences like high-definition streaming and gaming on the go seamless. The reduction in latency will open up new possibilities in remote operations, where users can interact with devices as if they were physically present. As 5G networks roll out, it will transform industries like entertainment, healthcare, and e-commerce by improving efficiency and enabling new ways of interacting with technology.",
      },
      {
        heading: "IoT Expansion",
        paragraph:
          "The rise of 5G technology will significantly impact the Internet of Things (IoT), which refers to the network of connected devices that communicate with each other. 5G will allow more devices to be connected at once, and with lower latency, these devices can operate more efficiently. Smart homes will become smarter, with appliances, security systems, and even lighting being able to communicate seamlessly and autonomously. In industries like manufacturing, IoT will drive automation, optimizing production lines and supply chains. This expansion of IoT will create more connected environments, improving convenience, safety, and efficiency across all sectors of society.",
      },
      {
        heading: "Improved Connectivity",
        paragraph:
          "One of the key benefits of 5G is its ability to provide improved connectivity in rural and underserved areas. As 5G networks expand, people in remote regions will gain access to faster internet speeds and better connectivity. This can bridge the digital divide, enabling rural populations to access resources such as online education, telemedicine, and e-commerce. The widespread coverage of 5G will also facilitate faster communication between businesses and customers, boosting economic growth and innovation. As the infrastructure grows, it will make high-speed internet a universal resource, benefitting millions of people across the world.",
      },
    ],
  },
  "tech-trends-2025": {
    date: "February 10, 2025",
    title: "Tech Trends in 2025",
    image: "/images/tech-trends-2025.jpg",
    description: `The tech landscape in 2025 is evolving rapidly...`,
    details: [
      {
        heading: "Wearable Technology Innovations",
        paragraph:
          "In 2025, wearable technology has evolved beyond simple fitness trackers to become essential tools for health and wellness monitoring. Smartwatches and fitness bands now include features such as advanced heart rate monitoring, blood oxygen sensors, and even blood glucose tracking. These devices are integrated with AI-powered health apps, which analyze the collected data and offer personalized recommendations. Additionally, wearables are being used for more than fitness; they are revolutionizing industries like healthcare and security by providing continuous, real-time data about the user’s physical and mental state. As wearables continue to advance, they will play a critical role in managing health and wellness more proactively.",
      },
      {
        heading: "AI in Everyday Devices",
        paragraph:
          "Artificial Intelligence is becoming increasingly embedded in everyday devices, from home assistants like Alexa and Google Home to smart refrigerators and washing machines. These AI-powered devices can learn from user preferences, adjust settings automatically, and even predict future needs. For instance, smart refrigerators can track the expiration dates of food and suggest recipes based on what is inside. Similarly, AI-powered home assistants can control lighting, security systems, and entertainment devices, all through voice commands. As AI becomes more ubiquitous, these devices will not only be more intuitive but also help improve efficiency and reduce energy consumption in daily life.",
      },
      {
        heading: "Electric Vehicles Dominate",
        paragraph:
          "Electric vehicles (EVs) are quickly becoming the dominant form of transportation as advancements in battery technology continue to improve their range and affordability. In 2025, the adoption of EVs will accelerate as more automakers transition to fully electric fleets. With widespread charging infrastructure and longer battery life, EVs will become more practical for everyday use, contributing to a significant reduction in greenhouse gas emissions. As governments and organizations push for more sustainable practices, electric vehicles will play a crucial role in reducing dependence on fossil fuels and combating climate change. This shift towards EVs will reshape the automotive industry and contribute to a greener future.",
      },
    ],
  },
  "quantum-computing-2025": {
    date: "March 15, 2025",
    title: "Quantum Computing in 2025: Transform Technology",
    image: "/images/quantum-computing.png",
    description: `Quantum computing is expected to revolutionize multiple industries by 2025, solving problems that classical computers cannot address efficiently.`,
    details: [
      {
        heading: "Advancements in Quantum Hardware",
        paragraph:
          "By 2025, quantum computing hardware will see significant breakthroughs. Quantum processors with more qubits, greater coherence times, and reduced error rates will be able to solve complex problems in fields like cryptography, materials science, and optimization. Companies like IBM, Google, and startups are working to build more stable quantum systems, allowing for the scaling up of quantum computers. These advancements will pave the way for real-world applications of quantum computing that were previously theoretical, marking a turning point in computing technology.",
      },
      {
        heading: "Quantum Cryptography and Security",
        paragraph:
          "Quantum computing’s ability to break traditional encryption methods poses a significant challenge to cybersecurity, but it also offers solutions. Quantum cryptography, particularly quantum key distribution (QKD), is a promising field that will emerge in 2025 as a secure way to transmit data. With quantum encryption, data can be protected against attacks from both classical and quantum computers, enabling secure communication channels that are nearly impossible to hack. Governments and businesses will begin to implement quantum-safe encryption protocols, creating a more secure digital landscape.",
      },
      {
        heading: "Quantum Computing in Drug Discovery",
        paragraph:
          "Quantum computing will play a transformative role in drug discovery by 2025. With its ability to simulate molecular structures and interactions at an atomic level, quantum computers will help researchers design and test new drugs faster than ever before. This technology will help identify the most effective compounds for treating diseases, reduce development timelines, and lower costs. Quantum simulations will also aid in understanding complex biological processes, opening up new avenues for personalized medicine and improving public health outcomes.",
      },
    ],
  },
};

export default function BlogDetailPage() {
  const { slug } = useParams();

  if (!slug || Array.isArray(slug)) {
    return <p className="text-center text-red-500">Invalid blog slug!</p>;
  }

  const blog = blogData[slug];
  if (!blog) {
    return <p className="text-center text-red-500">Blog post not found!</p>;
  }

  return (
    <div className="bg-slate-100 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Blog Date */}
        <p className="text-gray-600 text-sm">{blog.date}</p>

        {/* Blog Title */}
        <h1 className="text-3xl font-bold text-gray-800 mt-2">{blog.title}</h1>

        {/* Blog Image */}
        <div className="mt-6">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={400}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>

        {/* Blog Description */}
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          {blog.description}
        </p>

        {/* Blog Details */}
        <div className="mt-8 space-y-6">
          {blog.details.map((detail, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-gray-800">
                {detail.heading}
              </h2>
              <p className="text-gray-700 mt-2">{detail.paragraph}</p>
            </div>
          ))}
        </div>
        <CommentSection blogId="some-blog-id"/>
      </div>
    </div>
  );
}

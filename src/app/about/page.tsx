// about.tsx
import React from "react";

const About = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/virtual-img.jpg")' }}
    >
      <div className="relative container mx-auto flex items-center justify-start h-full px-6 z-10">
        <div className="text-white max-w-lg">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-900 to-orange-500 text-transparent mb-10 bg-clip-text">
            About Us
          </h1>
          <p className="text-lg leading-relaxed text-justify">
            Welcome to TechBlog! We are passionate about bringing you the latest
            and greatest news in the tech world. From breaking tech innovations
            to in-depth tutorials, we aim to educate, inform, and inspire. Our
            team consists of tech enthusiasts, developers, and designers who
            work tirelessly to provide the best content for our readers. Join us
            on this exciting journey as we explore the ever-evolving tech
            landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

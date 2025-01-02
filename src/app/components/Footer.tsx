"use client";

import Link from "next/link";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Side: TechBlog Description */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-indigo-500 mb-4">TechBlog</h2>
            <p className="text-sm text-gray-400">
              Stay up to date with the latest tech trends, news, and tutorials from industry leaders and developers.
            </p>
          </div>

           {/* Navigation Links */}
           <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <Link href="/" className="text-gray-400 hover:text-indigo-500">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-indigo-500">About</Link>
              <Link href="/contact" className="text-gray-400 hover:text-indigo-500">Contact</Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl text-gray-400">
              <Link href="https://www.facebook.com" target="_blank">
                <FaFacebookSquare className="hover:text-indigo-500" />
              </Link>
              <Link href="https://www.twitter.com" target="_blank">
                <FaTwitterSquare className="hover:text-indigo-500" />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <FaInstagramSquare className="hover:text-indigo-500" />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <FaLinkedin className="hover:text-indigo-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-sm text-gray-400 mt-12">
          <p>&copy; {new Date().getFullYear()} TechBlog. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

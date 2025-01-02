"use client";
import { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, phone });
  };

  return (
    <section
      className="bg-cover bg-center py-20 px-6"
      style={{ backgroundImage: "url('/images/contact-us.jpg')" }} 
    >
      <div className="container mx-auto text-white text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-300 to-blue-400 text-transparent bg-clip-text mb-8">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-bold mb-2 text-left justify-start">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-black rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-left font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-black rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm text-left font-bold mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 text-black rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

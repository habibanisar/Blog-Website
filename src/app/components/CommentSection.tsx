"use client"; // Client-side component

import { useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    []
  );
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Comment submit karo
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      setComments([...comments, { name, comment }]); // New comment add karo
      setName(""); // Name field clear karo
      setComment(""); // Comment field clear karo
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="p-4 border rounded-lg bg-gray-50">
            <p className="font-bold text-gray-800">{comment.name}</p>
            <p className="text-gray-700">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
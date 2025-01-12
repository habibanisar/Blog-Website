// src/components/CommentSection.tsx
import { useState } from "react";

const CommentSection = ({ blogId }: { blogId: string }) => {
  const [comments, setComments] = useState<string[]>([]); // Store comments here
  const [comment, setComment] = useState("");

  // Handle form submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment(""); // Clear the input field after submitting
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">Comments</h3>

      <div className="mt-4">
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          <ul>
            {comments.map((c, index) => (
              <li key={index} className="my-2 p-2 border-b">
                <p>{c}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <form onSubmit={handleCommentSubmit} className="mt-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment"
          rows={4}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;

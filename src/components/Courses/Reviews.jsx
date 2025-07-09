"use client";
import React, { useState } from "react";

const initialReviews = [
  {
    name: "Jane Doe",
    time: "2 days ago",
    rating: 5,
    message:
      "This course exceeded my expectations! The modules were practical and easy to follow. Highly recommended.",
  },
  {
    name: "Samuel Ade",
    time: "1 week ago",
    rating: 4,
    message:
      "Great content and engaging sessions. I especially loved the live demos. Would love more examples for job search strategies.",
  },
];

function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({ name: "", rating: 5, message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setReviews([
      ...reviews,
      {
        name: form.name,
        time: "Just now",
        rating: form.rating,
        message: form.message,
      },
    ]);
    setForm({ name: "", rating: 5, message: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-3xl px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review, idx) => (
            <React.Fragment key={idx}>
              <div className="py-6 flex flex-col md:flex-row md:items-start">
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.time}</div>
                  <div className="text-yellow-500 text-sm">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>
                <div className="md:w-2/3 text-gray-800">{review.message}</div>
              </div>
              {idx < reviews.length - 1 && (
                <hr className="w-full border-t border-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Leave a Review
          </h3>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-4 max-w-lg mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border px-3 py-2 rounded"
              value={form.name}
              onChange={handleChange}
              required
            />
            <select
              name="rating"
              className="border px-3 py-2 rounded"
              value={form.rating}
              onChange={handleChange}
            >
              <option value={5}>5 - Excellent</option>
              <option value={4}>4 - Good</option>
              <option value={3}>3 - Average</option>
              <option value={2}>2 - Poor</option>
              <option value={1}>1 - Terrible</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Review"
              className="border px-3 py-2 rounded"
              value={form.message}
              onChange={handleChange}
              required
              rows={3}
            />
            <button
              type="submit"
              className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-[#f7c769] transition-colors"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

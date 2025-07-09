"use client";
import React from "react";

const modules = [
  {
    title: "Module One: Understanding the Modern Job Market (Africa & Beyond)",
    format: "Interactive Lecture + Live Demos + Q&A",
    objectives: [
      "Explore current trends in the African and global job market",
      "Identify key industries and growth sectors",
      "Understand employer expectations and skills in demand",
    ],
  },
  {
    title: "Module Two: Personal Branding & Professional Identity",
    format: "Interactive Lecture + Live Demos + Q&A",
    objectives: [
      "Learn how to build a strong personal brand",
      "Develop a professional online presence",
      "Craft an impactful CV and cover letter",
    ],
  },
  {
    title: "Module Three: Job Search Strategies & Networking",
    format: "Interactive Lecture + Live Demos + Q&A",
    objectives: [
      "Master effective job search techniques",
      "Leverage online and offline networking opportunities",
      "Utilize job boards and recruitment platforms",
    ],
  },
  {
    title: "Module Four: Interview Preparation & Soft Skills",
    format: "Interactive Lecture + Live Demos + Q&A",
    objectives: [
      "Prepare for different types of interviews",
      "Practice common interview questions and answers",
      "Develop essential soft skills for workplace success",
    ],
  },
  {
    title: "Module Five: Career Growth & Lifelong Learning",
    format: "Interactive Lecture + Live Demos + Q&A",
    objectives: [
      "Set career goals and create a growth plan",
      "Identify opportunities for upskilling and reskilling",
      "Understand the importance of continuous learning",
    ],
  },
  {
    title: "Module Six: Entrepreneurship & Alternative Career Paths",
    format: "Interactive Lecture + Live Demos + Q&A",
    objectives: [
      "Explore entrepreneurship as a career option",
      "Learn about freelancing and remote work opportunities",
      "Discover alternative career paths in the modern economy",
    ],
  },
];

function handleEnroll() {
  // Replace the URL below with your actual enrollment or registration link
  window.location.href = "https://forms.gle/YyKT8XzRVE2pBSQ99";
}

function CourseContent() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-6xl px-4 mt-10">
        <h2 className="text-2xl font-bold mb-8 text-center">Course Content</h2>
        <div className="space-y-6">
          {modules.map((module, idx) => (
            <div
              key={idx}
              className="p-4 border rounded-lg shadow-sm bg-white mb-6"
            >
              <h3 className="text-lg font-semibold mb-1 text-center">
                {module.title}
              </h3>
              <div className="italic text-sm text-gray-600 mb-2 text-center">
                {module.format}
              </div>
              <div className="font-medium mb-1 text-center">
                By the end of this session, trainee will:
              </div>
              <ul className="list-disc list-inside ml-4 mb-4">
                {module.objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 mb-8">
          <button
            className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-[#f7c769] transition-colors"
            onClick={handleEnroll}
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseContent;

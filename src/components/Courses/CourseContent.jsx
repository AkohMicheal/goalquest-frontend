"use client";
import React from "react";

function CourseContent({ course }) {
  if (!course?.modules) return null;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl px-4 mt-6">
        <div className="space-y-6">
          {course.modules.map((module, idx) => (
            <div key={idx} className="p-4 border shadow-sm bg-white mb-6">
              <h3 className="text-lg font-semibold mb-1 text-left">
                ✅ {module.title}
              </h3>
              <div className="italic text-sm text-gray-600 mb-2 text-left">
                <b>Format:</b> {module.format}
              </div>
              <div className="font-medium mb-1 text-left">
                🎯 Module Objectives:
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
          <a
            href={course.formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-[#f7c769] transition-colors"
          >
            Enroll
          </a>
        </div>
      </div>
    </div>
  );
}

export default CourseContent;

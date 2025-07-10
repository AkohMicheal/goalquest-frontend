import React from "react";
import CourseData from "./CourseData";
import Link from "next/link";

export default function CourseList() {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-7 w-[90%] mx-auto">
        {CourseData.map((course) => {
          const isAIBootcamp = course.slug === "ai-smart-job-hunt";
          return (
            <div
              key={course.id}
              className={`relative bg-gray-50 p-4 mb-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300
                ${isAIBootcamp ? "border-4 border-yellow-400 scale-105 z-10" : ""}
              `}
            >
              {isAIBootcamp && (
                <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  Featured
                </span>
              )}
              <div className="mb-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className={`w-full object-cover ${isAIBootcamp ? "rounded-lg border-2 border-yellow-300" : ""}`}
                />
              </div>
              <h2
                className={`text-xl font-semibold mb-2 ${isAIBootcamp ? "text-yellow-700" : ""}`}
              >
                {course.title}
              </h2>
              <div className="flex items-center gap-1 mb-5">
                <span>★ {course.star}</span>
                <span>{course.rate}</span>
              </div>
              <Link
                className={`text-base bg-blue-950 text-white p-2 rounded-lg hover:bg-yellow-400 hover:text-blue-950 transition-colors duration-200
                  ${isAIBootcamp ? "font-bold shadow-lg" : ""}`}
                href={`/courses/${course.slug}`}
              >
                Learn More
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}

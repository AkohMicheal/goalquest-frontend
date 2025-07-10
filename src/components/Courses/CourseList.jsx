import React from "react";
import CourseData from "./CourseData";
import Link from "next/link";

export default function CourseList() {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-7 w-[90%] mx-auto">
        {CourseData.map((course) => (
          <div
            key={course.id}
            className="bg-gray-50 p-4 mb-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">
              <img src={course.image} alt={course.title} className="w-full object-cover" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <div className="flex items-center gap-1 mb-5">
              <span>★ {course.star}</span>
              <span>{course.rate}</span>
            </div>
            <Link className="text-base bg-blue-950 text-white p-2 rounded-lg hover:" href={`/courses/${course.slug}`}>Learn More</Link>
          </div>
        ))}
      </section>
    </div>
  );
}

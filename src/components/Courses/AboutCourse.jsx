import React from "react";

const AboutCourse = ({ course }) => {
  if (!course?.about) return null;

  const { overview, who, whatMakesItDifferent, price } = course.about;

  return (
    <div>
      <section className="mx-auto py-6 w-[70%] md:w-[80%] mt-2">
        <p>{overview}</p>

        <h1 className="text-2xl font-semibold my-4">Who This is For:</h1>
        <p>{who}</p>

        <h1 className="text-2xl font-semibold my-4">
          What Makes This Different:
        </h1>
        <p>{whatMakesItDifferent}</p>

        <h1 className="text-2xl font-semibold my-4">Course Fee:</h1>
        <p>
          {price.split("\n").map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <div className="text-center my-6">
          <a
            href={course.formLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-800">
              Enroll in {course.title}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutCourse;

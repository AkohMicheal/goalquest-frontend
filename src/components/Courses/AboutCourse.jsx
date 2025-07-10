import React from "react";

const AboutCourse = ({ course }) => {
  if (!course?.about) return null;

  const { overview, who, whatMakesItDifferent } = course.about;

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
      </section>
    </div>
  );
};

export default AboutCourse;

import React from "react";
import CourseDetailHero from "./CourseDetailHero";
import Link from "next/link";

const AboutCourse = () => {
  return (
    <div>
      <section className=" mx-auto py-8 w-[70%] md:w-[80%] mt-8">
        <p>
          The job market has evolved Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nam, sapiente. Reprehenderit dolor illo voluptate
          temporibus assumenda voluptatibus, non incidunt, quasi quas nesciunt,
          repellat cum magnam accusantium excepturi vero dignissimos ipsum.
        </p>
        <h1 className="text-2xl font-semibold my-4">Who This is For:</h1>
        <p>
          In today's fast-moving business landscape, knowledge isn't just power
          it's your unfair advantage. At GoalQuest Consult, we've redefined to
          professional development through our transformational training.
        </p>
        <h1 className="text-2xl font-semibold my-4">
          What Makes This Different:
        </h1>
        <p>
          In today's fast-moving business landscape, knowledge isn't just power
          it's your unfair advantage. At GoalQuest Consult, we've redefined
          professional development through our transformational training
          programs that bridge the gap between theory and real-world execution.
          Our carefully curated courses are designed by seasoned practitioners
          who understand what it takes to succeed in African markets. Whether
          you're looking to master digital marketing, strengthen your leadership
          capabilities, or build financial acumen, our hands-on approach ensures
          you gain immediately applicable skills not just textbook concepts.
        </p>
      </section>
      <Link href="/courses" className="flex justify-center mb-8">
        <button className="bg-blue-950 shadow-md font-medium hover:bg-[#151f56] text-white px-4 py-2 rounded-md transition duration-300">
          Enroll Now
        </button>
      </Link>
    </div>
  );
};

export default AboutCourse;

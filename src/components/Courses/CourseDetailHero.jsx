import React from "react";
import HeroSection from "../HeroSection";

const CourseDetailHero = ({ course }) => {
  // Set a unique background for AI Smart Job Hunt Bootcamp
  const isAIBootcamp = course.slug === "ai-smart-job-hunt";
  const backgroundImage = isAIBootcamp
    ? "/AISmartJobHunt.png"
    : "/Rectangle-423.png";

  return (
    <section className="pt-16 md:pt-10">
      <HeroSection
        title={course.title}
        subtitle="For ambitious professionals and business owners who refuse to settle
          for average, our training programs provide the knowledge, tools, and
          confidence to outperform the competition. Your next level starts here."
        ctaText="Enroll Now"
        ctaLink={course.formLink}
        backgroundImage={backgroundImage}
      />
    </section>
  );
};

export default CourseDetailHero;

import React from "react";
import HeroSection from "../HeroSection";

const CourseDetailHero = ({ title, ctaLink, backgroundImage }) => {
  return (
    <section className="pt-16 md:pt-10">
      <HeroSection
        className="font-bold text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
        title={title}
        subtitle=""
        ctaText="Enroll Now"
        ctaLink={ctaLink}
        backgroundImage="/AISmartJobHunt.png"
      >
        <p className="text-white text-sm  md:text-base lg:text-lg xl:text-xl">
          For ambitious professionals and business owners who refuse to settle
          for average, our training programs provide the knowledge, tools, and
          confidence to outperform the competition. Your next level starts here.
        </p>
      </HeroSection>
    </section>
  );
};

export default CourseDetailHero;

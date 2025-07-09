import React from "react";
import HeroSection from "../HeroSection";

const CourseDetailHero = () => {
  return (
    <div>
      <section>
        <HeroSection className="font-bold text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          title="AI Smart Job Hunt Bootcamp"
          subtitle=""
          ctaText="Enroll Now"
          ctaLink="/contact"
          backgroundImage="/AISmartJobHunt.png"
        >
          <p className="text-white text-sm">
            For ambitious professionals and business owners who refuse to settle
            for average, our training programs provide the knowledge, tools, and
            confidence to outperform the competition. Your next level starts
            here.
          </p>
        </HeroSection>
      </section>
    </div>
  );
};

export default CourseDetailHero;

import React from "react";
import HeroSection from "../HeroSection";

const CoursesHero = () => {
  return (
    <section className="pt-16 md:pt-20">
      <HeroSection
        title="We Are A Growth & Transformation Consulting Firm"
        subtitle="For ambitious professionals and business owners who refuse to settle
          for average, our training programs provide the knowledge, tools, and
          confidence to outperform the competition. Your next level starts here."
        ctaText="Book Appointment"
        ctaLink="https://calendly.com/goalquestacademy/consultation"
        backgroundImage="/Rectangle-423.png"
      >
      </HeroSection>
    </section>
  );
};

export default CoursesHero;

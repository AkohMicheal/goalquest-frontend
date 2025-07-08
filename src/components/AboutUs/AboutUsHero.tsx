import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import React from "react";
import HeroSection from "../HeroSection";

const AboutUsHero = () => {
  return (
    <section>
      <HeroSection
        title=""
        subtitle="We partner with startups, SMEs, and corporate leaders to transform challenges into opportunities"
        ctaText="Book Appointment"
        ctaLink="https://calendly.com/goalquestacademy/consultation"
        backgroundImage="/hero-bg.png"
      >
        {/* Add children content here */}
        <p className="text-2xl text-white">About Us</p>
        <p className="text-white font-bold text-2xl mt-5 md:text-4xl -mb-11">
          Clarity for business growth
        </p>
      </HeroSection>
    </section>
  );
};

export default AboutUsHero;

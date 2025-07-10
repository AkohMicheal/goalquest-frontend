"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = ({
  children, 
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage = "",
}) => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen gap-6 md:gap-3 text-center px-4">
        {children && <div className="mt-4">{children}</div>}
        <div className="flex items-center gap-4 mt-[40%] md:mt-[15%] md:w-[60%] mx-auto">
          <h2 className="font-bold text-2xl md:text-4xl text-white capitalize">{title}</h2>
        </div>
        <div className="flex items-center gap-2 mt-[0%] md:mt-[5%] md:w-[60%] mx-auto">
          <h2 className="text-xl md:text-xl text-white capitalize">{subtitle}</h2>
        </div>

        {/* CTA Button */}
        {ctaText && (
          <div>
            <a href={ctaLink}>
              <Button className="bg-blue-950 shadow-md font-medium hover:transition-all hover:bg-[#f7c769]">
                {ctaText}
              </Button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

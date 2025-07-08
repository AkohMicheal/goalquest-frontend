"use client";

import React from "react";

const LocationSection = () => {
  return (
    <section className="container mx-auto px-4 py-14">
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Old Air-Port Rd, adjacent to Waterock Global Development, Thinkers
            Corner, Enugu, Nigeria.
          </p>
        </div>

        {/* Right Content (Map) */}
        <div className="w-full h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
          {/* Google Maps Embed for Lagos, Nigeria */}
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

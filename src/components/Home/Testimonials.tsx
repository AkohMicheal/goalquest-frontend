"use client";

import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    image: "/Group-5.png",
    title:
      "I had the pleasure of being mentored by Goal Quest Consult, and it was a transformative experience. The guidance and wisdom shared by my mentor helped me navigate challenges and seize opportunities with newfound clarity. Their commitment to my personal and professional growth was evident in every interaction. I am grateful for the invaluable support and mentorship provided.",
    name: "Emily R.",
    position: "Marketing Director at BrightFuture Inc",
  },
  {
    id: 2,
    image: "/Group-7.png",
    title:
      `Before working with Goal Quest Academy, our operations were scattered and inefficient. The comprehensive business services provided by their team streamlined our processes and significantly boosted our productivity. The personalized approach and attention to detail have made a substantial difference in our company's growth trajectory. Highly recommended!`,
    name: "Sarah N.",
    position: "CEO of TechInnovate.",
  },
  {
    id: 3,
    image: "/Group-8.png",
    title:
      `The enterpreneurial training program at Goal Quest Consult was a game-changer for me. The practical insights and hands-on approach equipped me with the skills and confidence to launch my own business. The mentors were incredibly supportive, providing valuable feedback and encouragement every step of the way. I can't thank them enough for helping me turn my dreams into reality.`,
    name: "David L.",
    position: "Founder, GreenPath Solutions",
  },
];

const Testimonials = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextSlide = () => sliderRef.current?.slickNext();
  const prevSlide = () => sliderRef.current?.slickPrev();

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  // const rectangleStyle = {
  //   position: "relative",
  //   width: "100%",
  //   height: "70px",
  //   backgroundColor: "#CF982B",
  //   clipPath: `polygon(
  //     0% 20px,   /* Move top-left corner downward */
  //     50% 0%,    /* Create the skew on left side */
  //     50% 0%,    /* Create the skew on right side */
  //     100% 20px, /* Move top-right corner downward */
  //     100% 100%, /* Bottom-right corner (normal) */
  //     0% 100%    /* Bottom-left corner (normal) */
  //   )`,
  // };

  return (
    <section className="container h-full py-16 mx-auto">
      <h2 className="text-center font-bold text-4xl mb-10">
        Hear What Our Clients Have To Say
      </h2>
      <div className="w-10/12 mx-auto flex items-center justify-between relative">
        {/* Ensure Slider Only Renders in Client */}
        {isClient && (
          <Slider ref={sliderRef} {...settings} className="w-full">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="">
                {/* Left Side (Image) */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="md:w-1/2 flex flex-col b">
                    {/* <div style={rectangleStyle as React.CSSProperties}></div> */}
                    <div>
                      <img
                        src={testimonial.image}
                        alt="worth of business"
                        width={400}
                        height={400}
                        className="w-full object-cover "
                      />
                    </div>
                  </div>

                  {/* Right Side (Text & Buttons) */}
                  <div className="md:w-1/2  w-full flex flex-col space-y-5 text-center md:text-left md:mt-0 mt-6">
                    <h2 className=" text-lg">
                      {testimonial.title}
                    </h2>
                    {/* <p className="text-base text-justify">{testimonial.text}</p> */}
                    <div className="flex gap-4 justify-center md:justify-start">
                      <div className="space-y-3 md:space-y-3">
                        <h2 className="font-bold text-2xl text-[#222]">
                          {testimonial.name}
                        </h2>
                        <h2 className="font-medium text-base text-[#444]">
                          {testimonial.position}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Testimonials;

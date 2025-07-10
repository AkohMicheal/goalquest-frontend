import React from "react";
import ContactForm from "./ContactForm.jsx";

const GetInTouch = () => {
  return (
    <section className="container mx-auto px-6 py-12 md:py-16">
      {/* Flexbox for responsive layout */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Side - Contact Info */}
        <div className="w-full md:w-1/2 space-y-6 md:space-y-4 p-6 md:p-12">
          <h2 className="font-bold text-3xl md:text-4xl text-[#222]">
            Get In Touch
          </h2>
          <p className="leading-7 md:leading-8 flex flex-col gap-4 font-normal text-[#444] text-lg">
            <span>
              Goal Quest specializes in empowering entrepreneurs and business
              leaders through high-quality training, coaching, and consulting
              services.
            </span>
            <span>
              Get in touch with us via email, call, or complete the form to
              learn how we can be of help to you.
            </span>
          </p>
          <p className="flex flex-col gap-4 font-medium text-lg text-[#00193E]">
            <a
              href="mailto:info@quest-goconsult.com"
              className="text-yellow-400 hover:underline"
            >
              Email: info@quest-goconsult.com
            </a>
            <a
              href="tel:+2341234567890"
              className="text-yellow-400 hover:underline"
            >
              Phone: +234 123 456 7890
            </a>
          </p>
        </div>

        {/* Right Side - Contact Form Section */}
        <div className="w-full md:w-1/2 space-y-6 p-6 md:p-12">
          <div className="leading-7 md:leading-8 flex flex-col gap-4 font-normal text-[#444] text-lg">
            <h2 className="font-bold text-[#333] text-3xl md:text-4xl">
              Send Us A Message
            </h2>
            <p className="font-normal text-lg text-[#444]">
              Do you have a quick message for us? Kindly send us a message using
              the form, and we will be in touch with you as soon as possible.
              Thanks!
            </p>
          </div>
          {/* Add a form here in the future if needed */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

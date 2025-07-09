import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const WorthOfBusiness = () => {
  const rectangleStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "70px",
    backgroundColor: "#CF982B",
    clipPath: `polygon(
      0% 20px,   /* Move top-left corner downward */
      50% 0%,    /* Skew on left side */
      50% 0%,    /* Skew on right side */
      100% 20px, /* Move top-right corner downward */
      100% 100%, /* Bottom-right corner */
      0% 100%    /* Bottom-left corner */
    )`,
  };

  return (
    <section className="container h-full py-16 mx-auto">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side (Image & Rectangle) */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="w-full max-w-[400px]">
            {/* Ensure Rectangle Matches Image Width */}
            {/* style={rectangleStyle} */}
            <div className="w-full"></div>
            <div>
              <img
                src="https://res.cloudinary.com/dn4hkronr/image/upload/v1747933254/Group_6_olsiz2.png"
                alt="worth of business"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Right Side (Text & Buttons) */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col space-y-5">
          {/* <div>
            <Button className="bg-[#f7c769] shadow-md uppercase font-medium hover:bg-[#e6b85c]">
              Service
            </Button>
          </div> */}
          <h3 className="text-[#e9b348] font-semibold text-3xl uppercase mb-10 mt-8">OUR SERVICES</h3>
          <h2 className="font-bold text-3xl capitalize">
            Providing Clarity For Business Growth
          </h2>
          <p className="text-base text-justify">
            Every growing business hits crossroads where uncertainty slows
            momentum. At GoalQuest Consult, we cut through the complexity with
            razor-sharp clarity, transforming your challenges into actionable
            growth strategies.
          </p>
          <p className="text-base text-justify">
            Our data-driven approach illuminates your path forward, turning
            'what ifs' into measurable results. Whether you're scaling
            operations, entering new markets, or optimizing teams, we provide
            the strategic lens that converts vision into scalable success.
          </p>
          <div className="mb-8">
            {/* <Button className="bg-blue-950 shadow-md font-medium hover:bg-[#f7c769]">
              Learn More
            </Button> */}
            <a
              href="https://forms.gle/YyKT8XzRVE2pBSQ99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-950 shadow-md font-medium hover:bg-[#f7c769] space-x-0">
                Join our Business Mentorship
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorthOfBusiness;

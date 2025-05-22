import React from "react";
import { Button } from "../ui/button";

const offerData = [
  {
    id: 1,
    title: "Consulting and Management Services",
    description: `Scale smarter with GoalQuest Consult’s expert consulting—where data-driven strategies meet real-world execution. We partner with startups, SMEs, and corporate leaders to transform challenges into opportunities:
✔ Business Growth Strategies – Break into new markets & optimize operations. ✔ Financial & Operational Efficiency – Streamline costs, boost profitability. ✔ Leadership & Team Optimization – Build high-performing teams. ✔ Market Entry & Expansion – Data-backed roadmaps for sustainable scaling.
→ Your success isn’t accidental—it’s engineered. Get a Free Consultation today!`,
    image:
      "https://res.cloudinary.com/dn4hkronr/image/upload/v1747935835/group2_dmbwvw.png",
    buttonText: "Read More",
  },
  {
    id: 2,
    title: "Coaching & Mentorship",
    description: `Every great leader needs a guide. At GoalQuest Consult, our 1-on-1 coaching and mentorship programs are designed to fast-track your growth—whether you're an aspiring entrepreneur, corporate executive, or startup founder. Work directly with seasoned industry experts who provide tailored strategies, accountability, and real-world insights to help you: ✔ Master leadership – Build confidence, decision-making, and team management skills. ✔ Scale your business – Break through bottlenecks with proven growth frameworks. ✔ Navigate challenges – Get actionable advice from mentors who’ve been in your shoes. ✔ Unlock opportunities – Expand your network and gain access to exclusive resources.`,
    image:
      "https://res.cloudinary.com/dn4hkronr/image/upload/v1747935633/Group_15_ft9bzg.png",
    buttonText: "Read More",
  },
  {
    id: 3,
    title: "Our Training Programs",
    description: `At GoalQuest Consult, we empower entrepreneurs, business leaders, and ambitious professionals with world-class training,
We equip driven individuals and businesses ready to level up; we provide short courses and professional certifications in collaboration with globally recognized institutions.

`,

    image:
      "https://res.cloudinary.com/dn4hkronr/image/upload/v1747935634/group_hyqkgh.png",
    buttonText: "Read More",
  },
];
export default function WhatWeOffer() {
  return (
    <div>
      <section className="container h-full py-16 mx-auto">
        {offerData.map((offer) => (
          <div key={offer.id} className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Left Side (Image & Rectangle) */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
              <div className="w-full max-w-[400px]">
                {/* Ensure Rectangle Matches Image Width */}
                {/* style={rectangleStyle} */}
                <div className="w-full"></div>
                <div>
                  <img
                    src={offer.image}
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
              <div>
                <Button className="bg-[#f7c769] shadow-md uppercase font-medium hover:bg-[#e6b85c]">
                  Service
                </Button>
              </div>
              <h2 className="font-bold text-3xl capitalize">{offer.title}</h2>
              <p className="text-base text-justify">{offer.description}</p>
              <div>
                <Button className="bg-blue-950 shadow-md font-medium hover:bg-[#f7c769]">
                  {offer.buttonText}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
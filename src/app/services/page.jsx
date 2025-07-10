import React from "react";
import CoursesHero from "../../components/Courses/CoursesHero";
import Programs from "../../components/Courses/Programs";
import WorthOfBusiness from "@/components/Home/WorthOfBusiness";

const page = () => {
  return (
    <main>
      <CoursesHero />
      <WorthOfBusiness />
      <Programs />
    </main>
  );
};

export default page;

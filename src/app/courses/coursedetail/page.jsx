import React from "react";
import CourseDetailHero from "../../../components/Courses/CourseDetailHero";
import AboutCourse from "../../../components/Courses/AboutCourse";
import CourseContent from "../../../components/Courses/CourseContent";
import Reviews from "../../../components/Courses/Reviews";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../../components/ui/tabs";

const CourseDetail = () => {
  return (
    <div>
      <CourseDetailHero />
      <div className="w-full max-w-5xl mx-auto">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full flex justify-center bg-white rounded-none border-b border-gray-200">
            <TabsTrigger
              value="about"
              className="flex-1 text-center rounded-none border-b-2 data-[state=active]:border-blue-950 data-[state=active]:text-blue-950"
            >
              About Course
            </TabsTrigger>
            <TabsTrigger
              value="content"
              className="flex-1 text-center rounded-none border-b-2 data-[state=active]:border-blue-950 data-[state=active]:text-blue-950"
            >
              Course Content
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="flex-1 text-center rounded-none border-b-2 data-[state=active]:border-blue-950 data-[state=active]:text-blue-950"
            >
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="pt-0">
            <AboutCourse />
          </TabsContent>
          <TabsContent value="content" className="pt-0">
            <CourseContent />
          </TabsContent>
          <TabsContent value="reviews" className="pt-0">
            <Reviews />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseDetail;

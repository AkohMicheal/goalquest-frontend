import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import CourseData from "@/components/Courses/CourseData";
import CourseDetailHero from "@/components/Courses/CourseDetailHero";
import AboutCourse from "@/components/Courses/AboutCourse";
import CourseContent from "@/components/Courses/CourseContent";
import Reviews from "@/components/Courses/Reviews";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function CourseDetailPage({ params }) {
  const course = CourseData.find((c) => c.slug === params.slug);

  if (!course) {
    return notFound();
  }

  return (
    <div>
      <CourseDetailHero
  title={course.title}
  ctaLink="https://forms.gle/YyKT8XzRVE2pBSQ99"
  backgroundImage={course.image}
/>
      <div className="w-full mx-auto">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full flex items-center justify-center bg-white rounded-none border-b border-gray-200 h-14">
            <Link
              href="/courses"
              className="flex items-center px-4 text-blue-950 hover:text-yellow-600 text-xl font-bold"
              aria-label="Back to Courses"
            >
              ←
            </Link>
            <TabsTrigger value="about" className="flex-1 text-center">
              About Course
            </TabsTrigger>
            <TabsTrigger value="content" className="flex-1 text-center">
              Course Content
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1 text-center">
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <AboutCourse course={course} />
          </TabsContent>
          <TabsContent value="content">
            <CourseContent course={course} />
          </TabsContent>
          <TabsContent value="reviews">
            <Reviews course={course} />
          </TabsContent>

          <div className="text-center my-6">
            <a
              href="https://forms.gle/YyKT8XzRVE2pBSQ99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-800">
                Enroll in {course.title}
              </button>
            </a>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
// This file is used to render the course detail page based on the slug from the URL.

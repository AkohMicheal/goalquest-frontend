import CoursesHero from "@/components/Courses/CoursesHero";
import Programs from "@/components/Courses/Programs";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <>
      <CoursesHero />
      <Programs />
      <Link href="/courses/coursedetail" className="flex justify-center">
        <button className="bg-blue-950 shadow-md font-medium hover:bg-[#151f56] text-white px-4 py-2 rounded-md transition duration-300 mx-auto mt-4 mb-8">
          Course Details
        </button>
      </Link>
    </>
  );
}
// This page serves as the main entry point for the courses section of the application.

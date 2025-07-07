import CoursesHero from '@/components/Courses/CoursesHero';
import CourseList from '@/components/Courses/CourseList';
import Programs from '@/components/Courses/Programs';

export default function CoursesPage() {
  return (
    <main>
      <CoursesHero />
      <CourseList />
      <Programs />
    </main>
  );
}
// This page serves as the main entry point for the courses section of the application.
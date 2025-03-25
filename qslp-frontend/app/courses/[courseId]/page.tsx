// app/courses/[courseId]/page.tsx
import { notFound } from 'next/navigation';
import { courses } from '../courseData'; // import from the same file

interface CoursePageProps {
  params: {
    courseId: string;
  };
}

export default function CourseDetailPage({ params }: CoursePageProps) {
  const { courseId } = params;

  // Find the matching course in the array
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    // If there's no match, display a 404 page
    notFound();
  }

  return (
    <section>
      <h1>{course?.title}</h1>
      <p>{course?.content}</p>

      <h3>Resources</h3>
      <ul>
        {course?.resources.map((res) => (
          <li key={res.name}>
            <a href={res.url} target="_blank" rel="noopener noreferrer">
              {res.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
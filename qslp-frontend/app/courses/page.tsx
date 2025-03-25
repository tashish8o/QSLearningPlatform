// app/courses/page.tsx
'use client';

import Link from 'next/link';
import { courses } from './courseData'; // import shared data

export default function CoursesPage() {
  return (
    <section>
      <h1>Courses & Tutorials</h1>
      <p>Explore advanced topics in quantum computing.</p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {courses.map((course) => (
          <li key={course.id} style={{ margin: '1rem 0' }}>
            {/* Link to the dynamic route */}
            <Link href={`/courses/${course.id}`}>
              <strong>{course.title}</strong>
            </Link>
            <p style={{ margin: '0.25rem 0' }}>
              {/* Optionally show a snippet of the content */}
              {course.content.slice(0, 80)}...
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
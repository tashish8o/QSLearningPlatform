"use client";
import React from 'react';

// Learning resources data pulled from QS Learning Hub PDF
const resources = [
  { title: 'IBM – Basics of Quantum Information', url: 'https://learning.quantum.ibm.com/course/basics-of-quantum-information' },
  { title: 'IBM – Quantum Computing in Practice', url: 'https://learning.quantum.ibm.com/course/quantum-computing-in-practice' },
  { title: 'IBM – Quantum Learning Courses', url: 'https://learning.quantum.ibm.com/catalog/courses' },
  { title: 'StanfordOnline – Quantum Mechanics for Scientists and Engineers', url: 'https://www.edx.org/learn/quantum-physics-mechanics/stanford-university-quantum-mechanics-for-scientists-and-engineers-1' },
  { title: 'NVIDIA – CUDA-Q Academic', url: 'https://resources.nvidia.com/en-us-quantum-computing/quantum-computing' },
  { title: 'AWS – Amazon Braket Badge', url: 'https://explore.skillbuilder.aws/learn/learning-plans/1986/amazon-braket-badge-knowledge-badge-readiness-path' },
  { title: 'Microsoft – Quantum Computing with Azure Quantum', url: 'https://learn.microsoft.com/en-us/training/paths/quantum-computing-fundamentals/' },
  { title: 'University of Colorado Boulder – Foundations of Quantum Mechanics', url: 'https://www.coursera.org/learn/foundations-quantum-mechanics' },
  { title: 'Q-Ctrl – Quantum Computing with Black Opal', url: 'https://q-ctrl.com/black-opal' },
  { title: 'Udemy – An Introduction to Quantum Computing for Beginners', url: 'https://www.udemy.com/course/quantum-computing-introduction/' },
  { title: 'Udemy – Practical Quantum Computing with IBM Qiskit', url: 'https://www.udemy.com/course/dummies-guide-to-practical-quantum-computing-with-ibm-qiskit/?couponCode=CP130525US' },
  { title: 'Girls in Quantum – Free Educational Resources', url: 'https://girlsinquantum.com/' },
  { title: 'Chris Bernhardt – Quantum Computing for Everyone', url: 'https://www.amazon.com/gp/product/0262539535' },
  { title: 'Thomas G. Wong – Introduction to Classical and Quantum Computing', url: 'https://www.thomaswong.net/introduction-to-classical-and-quantum-computing-1e4p.pdf' }
];

export default function LearningPage() {
  return (
    <main className="learning">
      <h1 className="title">Top Quantum Computing Courses &amp; Resources</h1>
      <p className="description">
        Explore the best learning programs, courses, and tools to master quantum computing — from beginner-friendly intros to advanced programming with real quantum hardware.
      </p>
      <div className="grid">
        {resources.map((res) => (
          <a
            key={res.url}
            href={res.url}
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{res.title}</h2>
          </a>
        ))}
      </div>

      <style jsx>{`
        .learning {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen;
        }
        .title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
        }
        .description {
          font-size: 1.125rem;
          text-align: center;
          color: #aaa;
          margin-bottom: 2.5rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .card {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          height: 150px;
          border-radius: 12px;
          background-color: #3399ff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
          text-decoration: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.2s ease;
          color: #fff;
          cursor: pointer;
          text-align: center;
        }
        .card:hover {
          transform: translateY(-4px) scale(1.02);
          background-color: #1a82e0;
          box-shadow: 0 0 12px rgba(51, 153, 255, 0.7), 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        /* Mobile Friendly Adjustments */
        @media (max-width: 600px) {
          .title {
            font-size: 2rem;
          }
          .description {
            font-size: 1rem;
          }
          .grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .card {
            height: auto;
            padding: 1rem;
          }
        }
      `}</style>
    </main>
  );
}
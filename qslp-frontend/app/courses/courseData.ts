// app/courses/courseData.ts

export interface Course {
    id: string;
    title: string;
    content: string;
    resources: { name: string; url: string }[];
  }
  
  export const courses: Course[] = [
    {
      id: 'quantum-ml',
      title: 'Quantum Machine Learning 101',
      content:
        'Learn how quantum computing intersects with classical ML frameworks like TensorFlow, PyTorch, etc.',
      resources: [
        { name: 'PennyLane Tutorials', url: 'https://pennylane.ai/' },
        { name: 'Qiskit Machine Learning', url: 'https://qiskit.org/documentation/machine-learning' },
      ],
    },
    {
      id: 'quantum-algorithms',
      title: 'Quantum Algorithms for Beginners',
      content:
        'Introduction to popular quantum algorithms such as Grover’s and Shor’s algorithm.',
      resources: [
        { name: 'Qiskit Textbook', url: 'https://qiskit.org/textbook' },
        { name: 'IBM Quantum Learning', url: 'https://learning.quantum.ibm.com/' },
      ],
    },
    {
      id: 'shors-algorithm',
      title: "Shor's Algorithm Deep Dive",
      content:
        "A more advanced look at Shor's factoring algorithm and its implications for cryptography.",
      resources: [
        { name: 'IBM Research on Shor’s Algorithm', url: 'https://research.ibm.com/publications/' },
      ],
    },
  ];
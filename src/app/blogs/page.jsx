import Post from '../components/post';
import React from 'react';

const blogsData = [
  {
    id: 1,
    title: 'How to Start Learning Web Development',
    description:
      'A beginner-friendly guide to starting your journey in web development.',
    author: 'Saniya',
    category: 'Web Development',
    date: '2026-09-01',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },

  {
    id: 2,
    title: 'HTML and CSS Basics for Beginners',
    description:
      'Learn the basic concepts of HTML and CSS and build your first webpage.',
    author: 'Rahim',
    category: 'HTML & CSS',
    date: '2026-09-03',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
  },

  {
    id: 3,
    title: 'Understanding JavaScript Functions',
    description:
      'Functions are an important part of JavaScript. Learn how they work with simple examples.',
    author: 'Nadia',
    category: 'JavaScript',
    date: '2026-09-05',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
  },

  {
    id: 4,
    title: 'Getting Started with React',
    description:
      'Learn the basics of React components, props, state, and how to build interactive websites.',
    author: 'Saniya',
    category: 'React',
    date: '2026-09-08',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
  },

  {
    id: 5,
    title: 'Why Practice Is Important in Coding',
    description:
      'Regular coding practice helps you understand concepts and become a better developer.',
    author: 'Ayesha',
    category: 'Programming',
    date: '2026-09-10',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
  },
];

const BlogsPage = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-8">Our Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogsData.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;

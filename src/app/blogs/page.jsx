import Link from "next/link";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      author: "Aminur Islam",
      category: "Web Development",
      description:
        "Learn the basics of Next.js and how to build modern React applications.",
    },
    {
      id: 2,
      title: "Why React is So Popular",
      author: "John Doe",
      category: "Frontend",
      description:
        "Explore the reasons behind React’s popularity among developers.",
    },
    {
      id: 3,
      title: "Understanding JavaScript ES6 Features",
      author: "Sarah Khan",
      category: "JavaScript",
      description:
        "A beginner-friendly guide to important ES6 features in JavaScript.",
    },
    {
      id: 4,
      title: "Tailwind CSS for Beginners",
      author: "Alex Smith",
      category: "CSS",
      description:
        "Learn how to quickly design modern responsive websites using Tailwind CSS.",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Blogs</h2>

      {blogs.map(blog =><div key={blog.id}>
        <h3 className="text-4xl font-bold mb-2">{blog.title}</h3>
        <Link href={"/"}>Show details</Link>
      </div>)}
    </div>
  );
};

export default BlogsPage;

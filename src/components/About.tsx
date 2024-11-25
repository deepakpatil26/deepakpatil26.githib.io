import React from "react";

const About = () => {
  return (
    <section id="about" className="about section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600">
            I'm a passionate Full Stack Developer with expertise in React,
            Node.js, Express, and MongoDB. My journey in web development started
            5 years ago, and since then, I've been constantly learning and
            improving my skills in modern web technologies.
          </p>
          <p className="text-gray-600 mt-4">
            I specialize in building scalable web applications using the MERN
            stack. My experience includes working with TypeScript, Redux,
            Next.js, and various other modern tools and frameworks. I'm also
            well-versed in RESTful APIs, GraphQL, and database design.
          </p>
          <p className="text-gray-600 mt-4">
            When I'm not coding, I contribute to open-source projects and mentor
            junior developers. I believe in writing clean, maintainable code and
            following best practices in software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

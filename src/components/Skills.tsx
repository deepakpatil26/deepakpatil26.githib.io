import React from "react";

const skillsList = [
  {
    name: "React",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "MongoDB",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
  {
    name: "HTML5",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="skills-card flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="skills-card-img w-16 h-16 mb-4"
              />
              <h3 className="skills-card-name text-lg font-medium text-gray-900">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

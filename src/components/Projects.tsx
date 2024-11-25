import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Koolz.com",
    description:
      "The Koolz.com Clone is a fully functional e-commerce website that allows users to browse and purchase a variety of products.",
    image: "/Koolz.png",
    techStack: [
      "React JS",
      "TypeScript",
      "Redux",
      "Axios",
      "Redux-thunk",
      "React-Router",
      "Chakra-UI",
    ],
    github: "https://github.com/deepakpatil26/koovs-Website-Clone",
    demo: "https://koolz.vercel.app/",
  },
  {
    title: "Lifestyles Stores clone",
    description:
      "Lifestyle is India's leading fashion destination for the latest trends. Part of Dubai based retail and hospitality conglomerate",
    image: "/LifeStyleStores.png",
    techStack: [
      "React",
      "Redux",
      "Axios",
      "JavaScript",
      "HTML",
      "CSS",
      "Material-UI",
      "Tailwind",
    ],
    github: "https://github.com/deepakpatil26/spiffy-farm-6274",
    demo: "https://outfitstore.vercel.app/",
  },
  {
    title: "BoatLifeStyle.com-Clone",
    description:
      "boAt is your digital shopping assistant dedicated to saving you time,money and assure you get a quality product. ",
    image: "/boAt.png",
    techStack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/deepakpatil26/BoatLifeStyle-clone",
    demo: "https://deluxe-sunshine-85cb19.netlify.app/",
  },
  {
    title: "Cult.fit Clone",
    description:
      "The project is a clone of Cult.fit which is a health and fitness website",
    image: "/CultFit.png",
    techStack: ["React", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/deepakpatil26/acrid-land-8684",
    demo: "https://astounding-scone-73c2d5.netlify.app/",
  },
  {
    title: "Zara.com Clone",
    description: "A Spanish multi-national retail clothing chain.",
    image: "/Zara.png",
    techStack: ["React", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/deepakpatil26/moldy-care-8778",
    demo: "https://quiet-begonia-859735.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="project-title text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="project-description text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="project-tech-stack flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-link flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-deployed-link flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

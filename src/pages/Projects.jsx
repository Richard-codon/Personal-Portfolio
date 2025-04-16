import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({ title, description, techStack, link, github }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <FaLink /> View Website
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black flex items-center gap-2"
          >
            {/*<FaGithub /> View on GitHub*/}
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "MyOrbit",
      description:
        "An all-in-one tool for students and young professionals to stay organized and manage their life.",
      techStack: ["React", "Vite", "React Router", "Firebase", "Stripe", "Chart.js"],
      link: "https://myorbitplanner.com",
      //github: "https://github.com/Richard-codon/MyOrbit.git",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
              //github={project.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import hero from "../assets/hero-dev.svg";
//import developer from '../assets/developer.jpg';

const fadeIn = (direction = "up", delay = 0) => {
  return {
    initial: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    },
  };
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-center">
      {/* Text Section */}
      <motion.div
        {...fadeIn("left", 0.2)}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
          Richard Asante
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Software developer • Founder of MyOrbit • Innovator
        </p>
        <p className="text-md text-gray-500 mb-6 leading-relaxed">
          Passionate about building secure, elegant web and mobile apps.
          Proficient in React, React Native, Firebase, and always seeking to
          make tech that matters.
        </p>

        {/* Socials */}
        <div className="flex justify-center md:justify-start space-x-6 mb-6">
          <a
            href="https://github.com/Richard-codon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/richard-asante-742117326/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-600 hover:text-blue-800 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link
            to="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl shadow transition"
          >
            Contact Me
          </Link>
          <a
            href={`${import.meta.env.BASE_URL}RichardAsanteResume (5).pdf`}
            download
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl shadow-lg transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        {...fadeIn("right", 0.4)}
        className="md:w-1/2 mb-10 md:mb-0 flex justify-center"
      >
        <img
          src={hero}
          alt="Richard Asante"
          className="w-72 h-72 object-cover rounded-full border-[6px] border-blue-400 shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </div>
  );
};

export default Home;

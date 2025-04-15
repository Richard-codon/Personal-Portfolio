import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading Section */}
        <motion.h2
          className="text-4xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Introduction Section */}
        <motion.div
          className="mb-8 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            Hi, I'm Richard Asante, a Cybersecurity student and a passionate
            Mobile & Web Developer. I specialize in building modern, user-friendly
            applications with React, React Native, and Firebase. I love solving
            real-world problems and creating intuitive, dynamic user experiences.
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="flex flex-wrap justify-around gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col items-center text-center w-64">
            <FaGraduationCap className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Education</h3>
            <p className="text-gray-600">
              Student at Saint Paul College, specializing in
              Cybersecurity. Previously studied Computer Science at Southern
              Illinois University.
            </p>
          </div>

          <div className="flex flex-col items-center text-center w-64">
            <FaBriefcase className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Experience</h3>
            <p className="text-gray-600">
              Skilled in React, React Native, Firebase, and various development
              tools. Worked on several personal projects, including a full-stack
              web app for a local business.
            </p>
          </div>

          <div className="flex flex-col items-center text-center w-64">
            <FaLaptopCode className="text-4xl text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Tech Skills</h3>
            <p className="text-gray-600">
              Proficient in React, React Native, JavaScript, Firebase, and basic
              knowledge in Cybersecurity. Always eager to learn and explore new
              technologies.
            </p>
          </div>
        </motion.div>

        {/* Mission Statement Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Mission</h3>
          <p className="text-lg text-gray-600">
            My mission is to build impactful solutions that bridge the gap between
            technology and real-world challenges. I aim to continually grow as a
            developer while contributing to meaningful projects that make a difference.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

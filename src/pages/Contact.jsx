import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwpnebg"); 

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        {/* Contact Form */}
        {state.succeeded ? (
          <motion.p
            className="text-green-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thanks for your message! I’ll get back to you soon.
          </motion.p>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block mb-2 text-sm text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="mb-6 text-left">
              <label htmlFor="message" className="block mb-2 text-sm text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className={`w-full py-3 text-white rounded-md ${
                state.submitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        )}

        {/* Social Media Links */}
        <motion.div
          className="mt-8 flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://github.com/Richard-codon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/richard-asante-742117326/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-700 hover:text-blue-900"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:richardasante263@gmail.com"
            className="text-2xl text-gray-700 hover:text-black"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

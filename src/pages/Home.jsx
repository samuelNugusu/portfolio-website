import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  MailIcon,
} from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-8 md:px-16">
      
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I’m <span className="text-indigo-500">Samuel Nugusu</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg">
          A passionate{" "}
          <span className="text-purple-400">Full-Stack Developer</span> crafting
          modern & responsive web apps with clean design and smooth user
          experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg border border-gray-400 hover:border-indigo-500 transition-all"
          >
            Contact Me
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 mt-10 justify-center md:justify-start">
          {[
            { Icon: GithubIcon, url: "https://github.com/yourusername" },
            { Icon: LinkedinIcon, url: "https://linkedin.com/in/yourusername" },
            { Icon: TwitterIcon, url: "https://twitter.com/yourusername" },
            { Icon: InstagramIcon, url: "https://instagram.com/yourusername" },
            { Icon: MailIcon, url: "mailto:youremail@example.com" },
          ].map(({ Icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 transition-all duration-300 hover:scale-110 shadow-md"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg ring-4 ring-indigo-500 ring-offset-4 ring-offset-gray-900">
          <img
            src="../images/samuel.jpg" // place your photo inside "public" folder
            alt="Samuel Nugusu"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

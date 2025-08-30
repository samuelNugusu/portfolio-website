import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  MailIcon,
} from "lucide-react";

// Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const wordAnim = {
  hidden: { opacity: 0, y: 40, rotate: -5 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const bounceImage = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Home() {
  const title = "Hi, I’m Samuel Nugusu".split(" ");

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center text-white px-6 md:px-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-purple-900 animate-gradient" />

      {/* Glow Orbs */}
      <div className="absolute w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* Left Side - Text */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex-1 text-center md:text-left"
      >
        {/* Title with word animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight flex flex-wrap justify-center md:justify-start gap-2">
          {title.map((word, i) => (
            <motion.span
              key={i}
              variants={wordAnim}
              className={word.includes("Samuel") ? "text-indigo-400" : ""}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
       <motion.p
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }}
  className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
>
  {[
    "Full-Stack",
    "Developer",
    "skilled",
    "in",
    "React,",
    "Node.js,",
    "MongoDB,",
    "and",
    "Tailwind",
    "CSS.",
    "I",
    "focus",
    "on",
    "building",
    "fast,",
    "scalable,",
    "and",
    "user-friendly",
    "applications",
    "with",
    "clean,",
    "maintainable",
    "code",
    "and",
    "seamless",
    "experiences.",
  ].map((word, i) => (
    <motion.span
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
      className="inline-block mr-1"
    >
      {word}
    </motion.span>
  ))}
</motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={wordAnim}
          className="flex gap-4 justify-center md:justify-start"
        >
          <Link
            to="/projects"
            className="relative px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition-all shadow-lg overflow-hidden group"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full" />
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg border border-gray-400 hover:border-indigo-500 transition-all shadow-lg hover:scale-105 duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Side - Image + Socials */}
      <motion.div
        initial="hidden"
        animate="show"
        className="relative z-10 flex-1 flex flex-col items-center mt-12 md:mt-0"
      >
        {/* Profile Image with Orbiting Glow */}
        <motion.div
          variants={bounceImage}
          animate="animate"
          className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl"
        >
          <img
            src="/samuel.jpg"
            alt="Samuel Nugusu"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-indigo-500/60"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex gap-5 mt-10 flex-wrap justify-center"
        >
          {[
            { Icon: GithubIcon, url: "https://github.com/samuelNugusu" },
            { Icon: LinkedinIcon, url: "https://linkedin.com/in/samuelNugusu" },
            { Icon: TwitterIcon, url: "https://twitter.com/yourusername" },
            { Icon: InstagramIcon, url: "https://instagram.com/yourusername" },
            { Icon: MailIcon, url: "mailto:samuelnugusu7@gmail.com" },
          ].map(({ Icon, url }, i) => (
            <motion.a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-300 shadow-md"
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

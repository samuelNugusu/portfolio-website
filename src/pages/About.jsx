import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-8 md:px-16 py-20">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Bio */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-indigo-500">Me</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Hi 👋 I’m <span className="text-purple-400 font-semibold">Samuel Nugusu</span>, 
            a passionate <span className="text-indigo-400">Full-Stack Developer</span> dedicated 
            to building interactive and visually stunning web applications.  
          </p>
          <p className="text-gray-400">
            I specialize in creating scalable, fast, and user-friendly apps with clean code 
            and cutting-edge technologies. Always eager to learn and contribute to impactful projects.
          </p>
        </motion.div>

        {/* Right - Skills */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6"
        >
          {[
            "JavaScript / TypeScript",
            "React / Vite",
            "Node.js / Express",
            "MongoDB",
            "TailwindCSS",
            "REST / GraphQL",
            "Git / GitHub",
            "Three.js",
            "Docker",
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative p-5 bg-gray-800 rounded-xl shadow-md text-center overflow-hidden group"
            >
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
              <p className="relative font-medium z-10">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

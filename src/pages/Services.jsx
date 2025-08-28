import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Frontend Development",
    desc: "Pixel-perfect, responsive UI with React, Tailwind, and modern tooling.",
    icon: "💻",
  },
  {
    title: "Backend & APIs",
    desc: "Node/Express REST APIs, authentication, and database integration.",
    icon: "🧩",
  },
  {
    title: "3D & Interactions",
    desc: "Delightful animations, Three.js scenes, and micro-interactions.",
    icon: "🪄",
  },
  {
    title: "Performance & SEO",
    desc: "Image optimization, code-splitting, and best practices to rank & load fast.",
    icon: "⚡",
  },
];

export default function Services() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 md:px-16 py-24 overflow-hidden">
      
      {/* Floating Orbs Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2, y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-[140px]"
      />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-indigo-400 uppercase tracking-wide font-medium">
            What I Do
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">
            My <span className="text-purple-500">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            I craft digital experiences that blend modern design, smooth
            interactions, and scalable code — built to impress recruiters,
            clients, and users alike.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, delay: 0.1 * idx }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, rotate: 1 }}
              className="relative p-8 rounded-2xl bg-gray-900/60 backdrop-blur-lg border border-gray-700 shadow-lg overflow-hidden group cursor-pointer"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"></div>

              {/* Shimmer Effect */}
              <div className="absolute -top-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-5xl">{s.icon}</div>
                <h3 className="text-xl font-bold mt-4">{s.title}</h3>
                <p className="text-gray-400 mt-2">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link
            to="/portfolio"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition transform inline-block"
          >
            🚀 View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

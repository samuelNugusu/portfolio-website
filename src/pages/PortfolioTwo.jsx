import { motion } from "framer-motion";

const portfolioItems = [
  { title: "Creative UI Showcase", desc: "Modern interfaces built with React & Tailwind.", link: "#" },
  { title: "Fullstack Projects", desc: "Node.js + MongoDB apps with authentication & APIs.", link: "#" },
  { title: "3D Experiences", desc: "Immersive Three.js scenes with smooth motion.", link: "#" },
  { title: "Performance First", desc: "SEO-focused, blazing fast apps with code-splitting.", link: "#" },
  { title: "Design Systems", desc: "Reusable, scalable UI components and style guides.", link: "#" },
  { title: "Client Work", desc: "Real-world freelance and collaboration projects.", link: "#" },
];

export default function PortfolioTwo() {
  return (
    <section className="relative min-h-screen py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A curated collection of projects that blend <span className="text-white">design</span>,
            <span className="text-white"> code</span>, and <span className="text-white">innovation</span>.  
            Each section reflects my growth as a developer and my passion for building impactful digital experiences.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group card rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg p-6 shadow-xl"
            >
              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-20 blur-2xl transition"></div>

              <h3 className="text-xl font-semibold relative z-10">{item.title}</h3>
              <p className="text-gray-300 mt-2 relative z-10">{item.desc}</p>

              <motion.span
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="mt-4 inline-block text-sm font-medium text-pink-400 group-hover:underline relative z-10"
              >
                Explore →
              </motion.span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Floating Background Orbs */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-32 left-10 w-[26rem] h-[26rem] bg-pink-600 rounded-full blur-[180px] opacity-20"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-[22rem] h-[22rem] bg-purple-600 rounded-full blur-[160px] opacity-20"
      />
    </section>
  );
}

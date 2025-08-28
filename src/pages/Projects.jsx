import { motion } from "framer-motion";

const projects = [
  {
    title: "Project A",
    tags: ["React", "API"],
    demo: "https://samuel-website-old-silk.vercel.app/",
    code: "https://github.com/yourusername/project-a", // replace with your repo
    img: "/project-a.jpg", // ✅ make sure this exists in /public folder
  },
  {
    title: "Project B",
    tags: ["Three.js", "3D"],
    demo: "#",
    code: "https://github.com/yourusername/project-b",
    img: "https://via.placeholder.com/600x400?text=Project+B",
  },
  {
    title: "Project C",
    tags: ["Node", "MongoDB"],
    demo: "#",
    code: "https://github.com/yourusername/project-c",
    img: "https://via.placeholder.com/600x400?text=Project+C",
  },
  {
    title: "Project D",
    tags: ["UI/UX"],
    demo: "#",
    code: "https://github.com/yourusername/project-d",
    img: "https://via.placeholder.com/600x400?text=Project+D",
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            A collection of interactive, real-world projects — built to impress
            and engineered to perform.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              className="relative group rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg shadow-xl"
            >
              {/* Gradient Glow Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-30 blur-2xl transition duration-500"></div>

              {/* Thumbnail */}
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold">{p.title}</h3>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 font-medium shadow-md hover:scale-105 transition-transform"
                  >
                    🚀 Live Demo
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 font-medium shadow-md transition"
                  >
                    💻 Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Floating Lights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2, y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-24 left-12 w-[28rem] h-[28rem] bg-purple-600 rounded-full blur-[180px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-16 right-16 w-[24rem] h-[24rem] bg-pink-500 rounded-full blur-[160px]"
      />
    </section>
  );
}

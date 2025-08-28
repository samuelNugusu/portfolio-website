import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Sophia Lee",
    role: "Startup Founder",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Working with you was amazing! Our product’s frontend went from clunky to smooth, modern, and fast. The attention to detail blew us away.",
  },
  {
    name: "David Carter",
    role: "Agency Director",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "Reliable, fast, and creative. You not only coded the backend perfectly but also suggested better UX flows that impressed our clients.",
  },
  {
    name: "Amelia Brown",
    role: "Product Designer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "Pixel-perfect implementation of my designs! The animations and smooth interactions made the site feel alive.",
  },
  {
    name: "James Wilson",
    role: "E-Commerce Owner",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
    feedback:
      "My shop now loads twice as fast, SEO rankings went up, and conversions improved. Couldn’t ask for more!",
  },
  {
    name: "Olivia Martinez",
    role: "Marketing Manager",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    feedback:
      "Great communicator, super responsive, and delivered on time. You helped us launch our campaign without stress.",
  },
  {
    name: "Ethan Johnson",
    role: "Full-stack Developer",
    img: "https://randomuser.me/api/portraits/men/29.jpg",
    feedback:
      "Loved pair-programming with you. Clean, modern code and clear explanations. Would collaborate again anytime!",
  },
];

export default function Blog() {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="kicker text-pink-400 font-semibold tracking-wide uppercase">
            Client Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            What Clients Say About Me
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From startups to agencies, here’s how people describe working with
            me. Real feedback that shows I deliver results — not just promises.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 shadow-xl hover:shadow-pink-500/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-pink-400"
                />
                <div>
                  <h3 className="text-lg font-semibold">{r.name}</h3>
                  <p className="text-sm text-gray-400">{r.role}</p>
                </div>
              </div>

              <p className="text-gray-300 mt-5 leading-relaxed text-[15px]">
                “{r.feedback}”
              </p>

              {/* ⭐ Rating */}
              <div className="flex mt-5 text-yellow-400 text-lg">
                {"★★★★★"}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to see your feedback here?
          </h2>
          <p className="text-gray-400 mb-6">
            Let’s work together on your next project — and I’ll make sure you
            have a story worth sharing.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/40 transition"
          >
            Let’s Work Together →
          </Link>
        </motion.div>
      </div>

      {/* Floating Glow Orbs */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-32 left-10 w-[28rem] h-[28rem] bg-pink-600 rounded-full blur-[200px] opacity-20"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-[24rem] h-[24rem] bg-purple-600 rounded-full blur-[180px] opacity-20"
      />
    </section>
  );
}

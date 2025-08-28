export default function Contact() {
  return (
    <section
      id="contact"   // 👈 important, so the button knows where to scroll
      className="relative py-28 px-6 bg-gray-950 text-white"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-8">
          I’d love to hear about your project. Let’s connect and build something amazing together!
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/40 transition"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}

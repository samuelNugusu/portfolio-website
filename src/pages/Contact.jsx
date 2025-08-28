import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "contact") {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    }
  }, [location.state]);

  const submit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    console.log("Submit form", data);
    setStatus(
      "✅ Thanks! This is a demo form. Hook it to EmailJS, Formspree, or your own API."
    );
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-8 items-start">
        {/* LEFT: Map + Contact Info */}
        <div className="space-y-6">
          <div className="rounded-3xl overflow-hidden border border-white/10">
            <iframe
              title="map"
              className="w-full h-[300px] md:h-[380px]"
              src="https://maps.google.com/maps?q=Addis%20Ababa&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card">
              <div className="text-sm text-slate-400">Phone</div>
              <a className="block mt-1 hover:text-slate-200" href="tel:+251987792401">
                +251 987 792 401
              </a>
              <a className="block hover:text-slate-200" href="tel:+251953420346">
                +251 953 420 346
              </a>
            </div>
            <div className="card">
              <div className="text-sm text-slate-400">Address</div>
              <a
                className="block mt-1 hover:text-slate-200"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Addis Ababa, Ethiopia
              </a>
            </div>
            <div className="card">
              <div className="text-sm text-slate-400">Email</div>
              <a
                className="block mt-1 hover:text-slate-200"
                href="mailto:you@example.com"
              >
                you@example.com
              </a>
              <a
                className="block hover:text-slate-200"
                href="mailto:hello@example.com"
              >
                hello@example.com
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <form onSubmit={submit} className="card grid gap-4">
          <h1 className="title">Contact Me</h1>
          <p className="subtitle">I’ll get back to you as soon as possible.</p>
          <input
            className="bg-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
            name="name"
            placeholder="Your name"
            required
          />
          <input
            className="bg-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
            name="email"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            className="bg-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            className="bg-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
            name="message"
            rows="6"
            placeholder="Your message"
            required
          />
          <button className="btn-primary w-max" type="submit">
            Send Message
          </button>
          {status && <p className="text-sm text-slate-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}

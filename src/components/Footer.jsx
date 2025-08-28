export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto max-w-6xl py-10 px-4 text-sm text-slate-400 flex flex-col md:flex-row gap-4 items-center justify-between">
        <p>© {new Date().getFullYear()} Your Name — All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-slate-200" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-slate-200" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-slate-200" href="mailto:you@example.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

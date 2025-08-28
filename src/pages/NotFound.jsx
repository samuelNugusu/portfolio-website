import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h1 className="title">404 — Page Not Found</h1>
        <p className="subtitle">The page you’re looking for doesn’t exist.</p>
        <Link className="btn-primary mt-6 inline-block" to="/">Back to Home</Link>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Link to="/" className={s.brand} aria-label="khouding home">
        khoud<span className={s.cursor} aria-hidden="true" />ng
      </Link>

      <nav className={s.links} aria-label="Footer navigation">
        <Link to="/courses" className={s.link}>Courses</Link>
        <a href="#" className={s.link}>About</a>
        <a href="#" className={s.link}>Terms</a>
        <a href="#" className={s.link}>Privacy</a>
      </nav>

      <span className={s.right}>
        © {new Date().getFullYear()} khouding
      </span>
    </footer>
  )
}

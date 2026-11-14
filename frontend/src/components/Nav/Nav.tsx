import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useAuth } from '../../context/AuthContext'
import s from './Nav.module.css'

export default function Nav() {
  const { theme, toggle } = useTheme()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()

  // Close menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !avatarRef.current?.contains(e.target as Node)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  async function handleLogout() {
    await logout()
    navigate('/')
  }

  const initials = user
    ? (user.displayName.trim()[0] ?? user.email[0] ?? '?').toUpperCase()
    : '?'

  return (
    <nav className={s.nav} role="navigation" aria-label="Main navigation">
      {/* Logo */}
      <Link to="/" className={s.logo} aria-label="khouding home">
        khoud<span className={s.cursor} aria-hidden="true" />ng
      </Link>

      <div className={s.right}>
        {/* Theme toggle */}
        <div className={s.toggle} role="group" aria-label="Theme">
          <button
            className={`${s.toggleBtn} ${theme === 'dark' ? s.active : ''}`}
            onClick={() => theme === 'light' && toggle()}
            aria-pressed={theme === 'dark'}
          >
            Dark
          </button>
          <button
            className={`${s.toggleBtn} ${theme === 'light' ? s.active : ''}`}
            onClick={() => theme === 'dark' && toggle()}
            aria-pressed={theme === 'light'}
          >
            Light
          </button>
        </div>

        {/* Auth: log in button OR avatar */}
        {user ? (
          <>
            <button
              ref={avatarRef}
              className={`${s.avatar} ${menuOpen ? s.open : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Account menu"
              aria-expanded={menuOpen}
              aria-haspopup="true"
            >
              {initials}
            </button>

            <div
              ref={menuRef}
              className={`${s.menu} ${menuOpen ? s.show : ''}`}
              role="menu"
            >
              <div className={s.menuWho}>
                <div className={s.menuName}>{user.displayName}</div>
                <div className={s.menuEmail}>{user.email}</div>
              </div>

              <div className={s.menuGroup}>Navigate</div>
              <Link to="/courses" className={s.menuItem} role="menuitem">My courses</Link>
              <Link to="/courses/csharp-basics" className={s.menuItem} role="menuitem">
                C# Basics <span className={s.menuTiny}>· active</span>
              </Link>

              <hr className={s.menuDivider} />

              <div className={s.menuGroup}>You</div>
              <Link to="/profile" className={s.menuItem} role="menuitem">Account &amp; profile</Link>
              <Link to="/profile/login-methods" className={s.menuItem} role="menuitem">Login methods</Link>
              <Link to="/profile/preferences" className={s.menuItem} role="menuitem">Preferences</Link>
              <span className={`${s.menuItem} ${s.soon}`} role="menuitem" aria-disabled="true">
                Badges &amp; shield (soon)
              </span>

              <hr className={s.menuDivider} />

              <button className={s.menuItem} role="menuitem" onClick={handleLogout}>
                Log out
              </button>
            </div>
          </>
        ) : (
          <Link to="/auth/login" className={s.loginBtn}>
            Log in
          </Link>
        )}
      </div>
    </nav>
  )
}

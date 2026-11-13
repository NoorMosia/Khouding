import { Outlet, useLocation } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import s from './Layout.module.css'

export default function Layout() {
  const { pathname } = useLocation()
  // Coding screen is full-viewport — no footer
  const hideFooter = pathname.includes('/problems/')

  return (
    <div className={s.layout}>
      <Nav />
      <main className={s.main}>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}

import { Outlet, useLocation } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import s from './Layout.module.css'

export default function Layout() {
  const { pathname } = useLocation()
  const isAppZone = pathname.includes('/problems/') ||
    pathname.includes('/sections/') ||
    pathname.includes('/tests/') ||
    (pathname.includes('/courses/') && pathname.split('/').length > 3)
  const hideFooter = pathname.includes('/problems/') || pathname.includes('/tests/')

  return (
    <div className={s.layout}>
      <Nav />
      <main className={s.main}>
        {isAppZone ? (
          <Outlet />
        ) : (
          <div className={s.scroll}>
            <Outlet />
            {!hideFooter && <Footer />}
          </div>
        )}
      </main>
    </div>
  )
}

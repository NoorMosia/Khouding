import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import AppLayout from './components/AppLayout/AppLayout'
import Landing from './pages/Landing/Landing'
import Catalog from './pages/Catalog/Catalog'
import CourseHome from './pages/CourseHome/CourseHome'
import SectionView from './pages/SectionView/SectionView'
import CodingScreen from './pages/CodingScreen/CodingScreen'
import Auth from './pages/Auth/Auth'
import Profile from './pages/Profile/Profile'

export const router = createBrowserRouter([
  {
    // ── Root shell: Nav + main outlet ─────────────────────────────────────
    path: '/',
    element: <Layout />,
    children: [
      // ── Public / no-sidebar pages ────────────────────────────────────────
      { index: true,                   element: <Landing /> },
      { path: 'auth/login',            element: <Auth /> },
      { path: 'auth/register',         element: <Auth /> },
      { path: 'courses',               element: <Catalog /> },
      { path: 'profile',               element: <Profile /> },
      { path: 'profile/login-methods', element: <Profile /> },
      { path: 'profile/preferences',   element: <Profile /> },

      // ── Coding screen: full-viewport, no sidebar ─────────────────────────
      {
        path: 'courses/:courseId/sections/:sectionId/problems/:problemId',
        element: <CodingScreen />,
      },

      // ── App zone: sidebar via AppLayout ──────────────────────────────────
      {
        path: 'courses/:courseId',
        element: <AppLayout />,
        children: [
          { index: true,                   element: <CourseHome /> },
          { path: 'sections/:sectionId',   element: <SectionView /> },
        ],
      },
    ],
  },
])

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage.tsx'
import ProfilesPage from './pages/ProfilesPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import ErrorPage404 from './pages/ErrorPage404.tsx'
import './index.css'


const router = createBrowserRouter([
  {
  path: '/',
  element: <HomePage/>,
  errorElement: <ErrorPage404/>
  },
  {
    path: '/profiles',
    element: <ProfilesPage/>,
    children: [
      {
      path: '/profiles/:profileId',
      element: <ProfilePage/>,
  }
]
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

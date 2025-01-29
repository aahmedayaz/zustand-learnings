import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Home from './components/Home.tsx'
import AboutItems from './components/AboutItems.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            path: ':id',
            element: <AboutItems />
          }
        ]
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  },
  {
    path: '*',
    element: <div>This route doesn't exist</div>
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

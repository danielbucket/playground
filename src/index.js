import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.js'
import './root.style.css'

import Home from './pages/Home/index.js'
import InDev from './pages/InDev/index.js'
import About from './pages/About/index.js'
import Contact from './pages/Contact/index.js'

const path = '/api/v1'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return await fetch(`${path}/home/GET_content`)
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.error(err))
        },
      },
      {
        path: '/about',
        element: <About />,
        loader: async () => {
          return await fetch(`${path}/about/GET_content`)
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.error(err))
        },
      },
      {
        path: '/contact',
        element: <Contact />,
        loader: async () => {
          return await fetch(`${path}/contact/GET_content`)
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.error(err))
        },
        children: [
          {
            path: '/contact/contact_form',
            element: <InDev text={'Contact Form'}/>,
          },
        ],
      },
      {
        path: '/projects',
        element: <InDev text={'Projects'}/>,
        loader: async () => {
          return await fetch(`${path}/projects/GET_content`)
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.error(err))
        },
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<RouterProvider router={ router }>
			<Root />
		</RouterProvider>
	</React.StrictMode>
)
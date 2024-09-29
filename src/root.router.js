import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import './root.style.css'

import Home from './pages/Home/index.jsx'
import InDev from './pages/InDev/index.jsx'

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
          return {
            text: 'Solving all the worlds problems, one bucket of code at a time.',
          }
        },
      },
      {
        path: '/about',
        element: <InDev  text={'About'}/>,
      },
      {
        path: '/contact',
        element: <InDev text={'Contact'} />,
      },
      {
        path: '/projects',
        element: <InDev text={'Projects'}/>,
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
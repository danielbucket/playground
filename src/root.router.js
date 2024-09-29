import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import './root.style.css'

import Home from './pages/Home/index.jsx'

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
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={ router }>
			<Root />
		</RouterProvider>
	</React.StrictMode>
)
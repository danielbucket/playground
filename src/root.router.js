import React from 'react'
import ReactDom from 'react-dom'
import { createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import './root.style.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>404 Not Found</div>
  }
])

const root = ReactDom.createRoot(document.getELementBtId('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={ router }>
      <Root />
    </RouterProvider>
  </React.StrictMode>
)
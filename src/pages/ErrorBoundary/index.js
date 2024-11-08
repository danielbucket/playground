import React from 'react'
import { ErrorBoundaryWrapper } from './index.styled.js'
import { useRouteError } from 'react-router-dom'

export default function ErrorBoundary() {
  const error = useRouteError()

  return (
    <ErrorBoundaryWrapper>
      <div>Something went wrong</div>
      <p>{error.message}</p>
    </ErrorBoundaryWrapper>
  )
}
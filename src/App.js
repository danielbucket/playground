import React from 'react'
import { Outlet as ContentOutlet } from 'react-router-dom'
import Navigation from './pages/Navigation/index.js'
import Footer from './pages/Footer/index.js'
import { StyledAppWrapper } from './app.styled.js'

export default function App() {
  return (
    <>
      <StyledAppWrapper>
        <Navigation />
        <ContentOutlet />
        <Footer />
      </StyledAppWrapper>
    </>
  )
}
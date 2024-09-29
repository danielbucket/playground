import React from 'react'
import { Outlet as MainContent } from 'react-router-dom'
import Navigation from './pages/Navigation/index.jsx'
import Footer from './pages/Footer/index.jsx'
import { StyledAppWrapper } from './root.styled.js'

export default function Root() {
  return (
    <StyledAppWrapper>
      <Navigation />
      <MainContent />
      <Footer />
    </StyledAppWrapper>
  )
}
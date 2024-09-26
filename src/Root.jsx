import React from 'react'
import { Outlet as MainContent } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
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
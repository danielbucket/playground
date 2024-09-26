import React from 'react'
import { StyledNavigation, StyledLink, SiteTitleLink, StyledUL } from './index.styled'

export default function Navigation() {
  return (
    <StyledNavigation>
      <SiteTitleLink to='/'></SiteTitleLink>
      <StyledUL>
        <CustomLink to='/about'>About</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
        <CustomLink to='/projects'>Projects</CustomLink>
      </StyledUL>
    </StyledNavigation>
  )
}

function CustomLink({ to, children, ...props }) {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  )
}
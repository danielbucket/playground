import React from 'react'
import { StyledFooter, StyledLink } from './Footer.styled'
import githubIcon from '../../assets/icons/github/github-mark.png'

export default function Footer() {

  return (
    <StyledFooter>
      <StyledLink to='https://github.com/danielbucket'>
        <img src={ githubIcon } alt='GitHub icon' />
        <p>@danielBucket <span>© 2024</span></p>
      </StyledLink>
  )
}
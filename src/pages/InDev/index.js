import React from 'react'
import { StyledInDevPage, StyledNavLink } from './index.styled.js'

const robotImage = require('../../assets/images/robot.jpeg')

export default function InDev({ text }) {

  return (
    <StyledInDevPage>
      <div className="header-container">
        <img src={ robotImage } alt="robot image"/>
      </div>
      <div className="body-container">
        <div className="text-content-container">
          <p>The <span>{ text }</span> page is currently in development.</p>
          <p>Check back later for updates.</p>
          <StyledNavLink to="/">Click to return home</StyledNavLink>
        </div>
      </div>
    </StyledInDevPage>
  )
}
import React from 'react'
import { StyledInDevPage } from './index.styled.js'

const robotImage = require('../../assets/images/robot.jpeg')

export default function InDev({ text }) {

  return (
    <StyledInDevPage>
      <div className="header-container">
        <img src={ robotImage } alt="error image"/>
      </div>
      <div className="body-container">
        <div className="text-content-container">
          <p>This page '<span>{ text }</span>', is currently under construction</p>
        </div>
      </div>
    </StyledInDevPage>
  )
}
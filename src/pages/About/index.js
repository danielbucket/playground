import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { StyledAboutPage } from './index.styled'
const image = require('../../assets/images/danielBucket.jpg')

export default function About() {
  const [img, setImg] = useState(null)
  const [content, setContent] = useState({})
  const loaderData = useLoaderData()

  useEffect(() => {
    setContent(() => loaderData)
    setImg(() => image)
  },[])

  return (
    <StyledAboutPage>
      <div className="header-container">
        <img src={ img } alt="image of Daniel Bucket" />
      </div>
      <div className="body-container">
        <div className="text-container">
          <p>{content.bio}</p>
          <p>{content.name}</p>
          <p>{content.title}</p>
        </div>
      </div>
    </StyledAboutPage>
  )
}

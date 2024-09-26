import React, { useState, UseEffect } from 'react'
import { useLoaderData, Outlet } from 'react-router-dom'
import { StyledAbout } from './index.styled'
import { image } from '../../assets/images/danielBucket.jpg'

export default function About() {
  const [image, setImage] = useState(null)
  const [content, setContent] = useState({})
  const loaderData = useLoaderData()

  useEffect(() => {
    setContent(() => loaderData)
    setImage(() => image)
  },[])

  return (
    <StyledAbout>
      <div className="header-container">
        <img src={ image } alt="image of Daniel Bucket" />
      </div>
      <div className="body-container">
        <div className="text-container">
          
        </div>
      </div>
    </StyledAbout>
  )
}

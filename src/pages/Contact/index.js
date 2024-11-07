import React, { useEffect, useState } from 'react'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import importedImage from '../../assets/images/T100_0724.jpg'
import { StyledContactPage, StyledLink } from './index.styled'


function Contact() {
  const [content, setContent] = useState({})
  const [image, setImage] = useState(null)
  const [isActive, setIsActive] = useState(false)
  const [error, setError] = useState(null)
  const loaderData = useLoaderData()

  useEffect(() => {
    setContent(() => loaderData)
    setImage(() => importedImage)
    setIsActive(() => false)
  },[])

  const navigate = useNavigate()

  const handleClick = () => {
    setIsActive(() => true)
    navigate('/contact/contact_form')
  }

  function IsActiveElement() {
    return (
      <div className='is-active-element'>
        <CustomLink onClick={ handleClick }>Contact Form</CustomLink>
        <p className="bio-text">{content.bio}</p>
      </div>
    )
  }
  
  return (
    <StyledContactPage>
      <div className="header-container">
        <img src={ image } alt="image of truck" />
      </div>
      <div className="body-container">
        <div className="text-container">
          {
            !isActive
            ? <IsActiveElement />
            : <Outlet />
          }
        </div>
      </div>
    </StyledContactPage>
  )
}

function CustomLink({ to, children, ...props}) {
  return <StyledLink to={to} {...props}>{children}</StyledLink>
}

export default Contact
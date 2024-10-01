import styled from 'styled-components'
import { AppContent } from '../../root.styled'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 1.5em;
  margin: 0 1em;
    &:hover {
      color: blue;
    }
`

export const StyledInDevPage = styled(AppContent)`
  
`
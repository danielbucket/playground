import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledNavigation = styled.nav`
  grid-area: Navigation;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 0 0.5rem;
  font-family: Ubuntu_Reg;
  font-size: 1.25rem;
`

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 0.25rem;
  & .active, &:hover {
    color: #777;
  }
`

export const SiteTitleLink = styled(StyledLink)`
  width: 35%;
  font-size: 2rem;
  font-family: Laila_Med;
  & .active {
    color: black;
  }
`

export const StyledUL = styled.ul`
  display: flex;
  justify-content: end;
  gap: 1rem;
  flex-grow: 2;
  list-style: none;
  fonst-sixe: 1.25rem;
  padding: 0;
`
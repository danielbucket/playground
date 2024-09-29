import styled from 'styled-components'
import { ParentContentLayout } from '../../root.styled'

export const StyledHomePage = styled(ParentContentLayout)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & .header-container {
      width: 98%;
      margin: 0 auto;

    & img {
      width: 100%;
      border-radius: 2rem;
      margin: auto;
      box-shadow: 0rem 0rem 1rem 0rem;
    }
  }

  & .body-container {
    width: 98%;
    margin: 0 auto;

    & .text-content-container {
      margin: 1rem 0;
      padding: 1rem;
      background-color: #f0f0f0;
      font-size: 2rem;
      text-align: center;
      border-radius: .3rem;
    }
}
`
import styled from 'styled-components'

export const StyledAppWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows:
    [Navigation] 10rem
    [ParentContentLayout] 1fr
    [Footer] 8rem;
  height: 100vh;
  width: 100vw;
`

export const ParentContentLayout = styled.div`
  grid-area: ParentContentLayout;
  padding-top: 3rem;
  height: 100%;
  font-family: 'Roboto';
`

export const AppContent = styled(ParentContentLayout)`
  & .header-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & img {
      width: 92%;
      border-radius: 2rem;
      margin: auto;
      box-shadow: 0 0 0.75rem 0.3rem black;
    }
  }
  
  & .body-container {
    flex-grow: 1;
    width: 98%;
    font-size: 2rem;
    margin: 2rem auto 0 auto;

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
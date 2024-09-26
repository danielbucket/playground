import styled from 'styled-components'

export const StyledAppWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: 1
    [Navigation] 6rem
    [MainContent] 1fr
    [Footer] 5rem;
  height: 100vh;
  width: 100vw;
`

export const ParentContentLayout = styled.div`
  grid-area: MainContent;
  padding-top: 1.75rem;
  height: 100%;
  font-family: 'Roboto';
`

export const AppContent = styled(ParentContentLayout)`
  & .image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & img {
      width: 98%;
      border-radius: 2rem;
      margin: auto;
      box-shadow: 0 0 1rem 1rem black;
    }
  }
  
  & .body-container {
    flex-grow: 1;
    width: 98%;
    font-size: 2rem;
    margin: 2rem auto 0 auto;

    & .text-content-container {
      font-size: 2rem;
      text-align: center;
    }
  }
`
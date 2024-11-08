import styled from 'styled-components'

export const ErrorBoundaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;

  && div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: .3rem;
  background-color: rgb(226 224 224);

  }
  
  && p {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    border-radius: .3rem;
    background-color: #f0f0f0;
    box-shadow: 0 0 0.75rem 0.3rem black

  }
`;
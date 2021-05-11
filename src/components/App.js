import styled, { keyframes } from 'styled-components';
import Header from './Header'
import Main from './Main'
import React from '../assets/react.svg'

function App() {
  return (
    <div>
      <Container>
        <Wrapper>
          <Header />
          <Main />
        </Wrapper>
      </Container>
    </div>
  );
}

const Container = styled.div`
  img{
    position:center;
    display:flex;
    justify-content:center;
  }
`
const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`


const Wrapper = styled.div`
  background-image: url(${React});
  background-repeat:no-repeat;
  background-position-x: 125%;
  background-position-y: 5%;
  background-attachment: fixed;
`

export default App;

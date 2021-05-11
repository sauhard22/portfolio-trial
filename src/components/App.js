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
  background: #f9f9f9;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  img{
    position:center;
    display:flex;
    justify-content:center;
  }
  
  height: 100%;
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
  animation: ${rotation} 10s infinite linear;

  
  Header{
    z-index:0;
  }
  Main{
    z-index:0;
  }
`

export default App;

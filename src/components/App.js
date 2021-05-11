import styled from 'styled-components';
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

`

const Wrapper = styled.div`
  background-image: url(${React});
  background-repeat:no-repeat;
  background-position: top right;
  vertical-align: top;
  shape-outside: circle(50%);
`

export default App;

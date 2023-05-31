import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  border: solid 1px red;
  `
const Apresentation = styled.section`
  height: 82%;
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  z-index: 1;

  h1{
    font-size: 48px;
  }
  p{
    font-size: 16px;
    color: #7b2609;
  }
  span{
    color: #943208;
  }
`

export const About = () => {
  return (
    <Container>
      <Apresentation>
        <h1>You Can’t Trust <span>Just Anyone</span> With Your Hair.</h1>
        <p>Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      </Apresentation>
    </Container>
  );
}
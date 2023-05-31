import styled from "styled-components";
import { Header } from "./Header";
import background from '../assets/image-1.jpeg'

const Background = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  position: relative;
  
  >div{
    height: 100%;
    width: 50%;
    position: absolute;
    z-index: 0;
    right: 0px;
    overflow-y: hidden;
    img{
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
`

const Container = styled.main`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  /* border: solid 1px red; */
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

export const Home = () => {
  return (
    <Background >
      <Container>
        <Header></Header>
        <Apresentation>
          <h1>You Can’t Trust <span>Just Anyone</span> With Your Hair.</h1>
          <p>Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
        </Apresentation>
      </Container>
      <div>
        <img src={background}/>
      </div>
    </Background>
  );
}
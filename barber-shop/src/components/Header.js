import logo from '../assets/Logo.png'
import styled from "styled-components";

const Container = styled.header`
  min-height: 18%;
  width: 100%;
  /* max-width: 1320px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 1;
  /* border: solid 1px blue; */
  /* position: absolute;*/
  
  div{
    width: 50%;
    display: flex;
    justify-content: start;
  }

  span{
    width: 50%;
    display: flex;
    justify-content: end;
    gap:60px;
  }

  a{
    color: #FFF;
  }
`

export const Header = () => {
  return (
    <Container >
     <div>
      <img src={logo}/>
     </div>
     <span>
      <a>Home</a>
      <a>About Us</a>
      <a>The Team</a>
      <a>Services</a>
     </span>
    </Container>
  );
}
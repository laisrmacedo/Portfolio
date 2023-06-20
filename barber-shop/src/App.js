import { Home } from "./components/Home";
import { About } from "./components/About";
import styled from "styled-components";
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'
import { useEffect, useState } from "react";
import { Offer } from "./components/Offer";
import { Cutting } from "./components/animations/Cutting";
import { Team } from "./components/Team";
import { Comments } from "./components/comments/Comments";
import { Footer } from "./components/Footer";


const Container = styled.div`
  height: 650vh;
  width: 100vw;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  position: relative;
  /* border: solid 2px yellow; */
`

const Loading = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SocialMedia = styled.div`
  height: 100px;
  width: 25px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  /* align-items: center; */
  position: fixed;
  bottom: 0px;
  left: 90px;
  /* border: solid 2px yellow; */
  @media screen and (max-width: 481px){
    display: none;
  }
`

function App() {
  const [loading, isLoading] = useState(true)

  setTimeout(() => isLoading(false), 2000)

  return (
    <>
    {loading ?  
      <Loading>
        <Cutting/> 
      </Loading> 
      : 
      <Container >

        <Home/>
        <About/>
        <Offer/>
        <Team/>
        <Comments/>
        <Footer/>
        <SocialMedia>
          <img src={instagram}/>
          <img src={whatsapp}/>
        </SocialMedia>
      </Container>
    }
    </>
  );
}

export default App;

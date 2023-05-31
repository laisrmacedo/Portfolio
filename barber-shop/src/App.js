import { Home } from "./components/Home";
import { About } from "./components/About";
import styled from "styled-components";
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'

const Container = styled.div`
  height: 400vh;
  width: 100vw;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  position: relative;
  /* border: solid 2px yellow; */
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
`

function App() {
  return (
    <Container >
     <Home/>
     <About/>
     <SocialMedia>
      <img src={instagram}/>
      <img src={whatsapp}/>
     </SocialMedia>
    </Container>
  );
}

export default App;

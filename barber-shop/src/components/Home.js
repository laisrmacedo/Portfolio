import styled from "styled-components";
import { Header } from "./Header";
import background from '../assets/image-1.jpeg'
import { useEffect, useRef } from "react";
import { useState } from "react";
import FadeIn from "./animations/FadeIn";
import Slide from "./animations/Slide";

const Background = styled.div`
  height: 100vh;
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
    @media screen and (max-width: 481px){
      width: 100%;
    }
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
  @media screen and (max-width: 481px){
    padding: 0 30px;
  }
  `
const Apresentation = styled.section`
/* border: solid 1px red; */
  height: 82%;
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  z-index: 1;
  @media screen and (max-width: 481px){
    width: 100%;
    justify-content: end;
    margin-bottom: 100px;
    /* height: 100%; */
  }

  h1{
    font-size: 48px;
    @media screen and (max-width: 481px){
      color: #fff;
    }
  }
  p{
    font-size: 16px;
    color: #7b2609;
    @media screen and (max-width: 481px){
      color: #fff;
    }
  }
  span{
    color: #943208;
    @media screen and (max-width: 481px){
      color: #f8a481;
    }
  }
`

export const Home = () => {
  const targetRef = useRef(null);
  const [showComponent, setShowComponent] = useState(false);
  
  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShowComponent(true)
        } else {
          // setShowComponent(false)
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Ajuste o limiar de interseção conforme necessário
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  return (
    <Background id="home">
      <Container>
        <Header></Header>
        <FadeIn show={showComponent}>
        <Apresentation>
          <h1>You Can’t Trust <span>Just Anyone</span> With Your Hair.</h1>
          <p>Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
        </Apresentation>
        </FadeIn>
      </Container>
      <div ref={targetRef}>
        <Slide classCSS={"slide-in-left"} show={showComponent}>
          <img src={background}/>
        </Slide>
      </div>
    </Background>
  );
}
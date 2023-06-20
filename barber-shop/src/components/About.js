import styled from "styled-components";
import { Photo } from "./Photo"
import photo1 from "../assets/photo1.jpeg"
import { useEffect, useState } from "react";

import { useRef } from "react";
import FadeIn from "./animations/FadeIn";

const Container = styled.main`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: start;
  justify-content: start;
  position: relative;
  /* flex-direction: row; */
  
  /* flex-direction: column; */
  /* border: solid 1px red; */
  @media screen and (max-width: 481px){
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }
  `
const Apresentation = styled.section`
  height: 82%;
  width: 50%;
  padding-left: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  z-index: 1;
  @media screen and (max-width: 481px){
    padding: 0 30px;
    width: 100%;
    height: 50%;
  }

  h1{
    font-size: 48px;
  }
  p{
    font-size: 20px;
    color: #7b2609;
  }
`

export const About = () => {
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
    <Container ref={targetRef} id="about-us">
      <Photo className="init-hidden-off" photo={photo1} show={showComponent} classCSS={"slide-in"}></Photo>
      <Apresentation>
        <FadeIn show={showComponent}>
          <h1>Precision and Attitude</h1>
          <p>Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
          <p>Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
        </FadeIn>
      </Apresentation>
    </Container>
  );
}
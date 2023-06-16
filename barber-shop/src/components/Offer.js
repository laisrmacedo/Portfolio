import styled from "styled-components";
import { Photo } from "./Photo"
import photo2 from "../assets/photo2.jpeg"
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
  /* flex-direction: column; */
  /* border: solid 1px red; */
  `
const Apresentation = styled.section`
  height: 82%;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  z-index: 1;

  h1{
    font-size: 48px;
  }
  p{
    font-size: 20px;
    color: #7b2609;
  }
  span{
    color: #943208;
  }
  ul{
    line-height: 30px;
  }
`

export const Offer = () => {
  const targetRef = useRef(null);
  const [showComponent, setShowComponent] = useState(false);
  
  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShowComponent(true)
        } else {
          setShowComponent(false)
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
    <Container ref={targetRef} id="services">
      <Apresentation>
        <FadeIn show={showComponent}>
          <h1>We Offer The Best Value</h1>
          <p>Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
          <ul>
            <li>Men’s Haircut .................................. $30</li>
            <li>Children’s Haircut Basic ..................... $20</li>
            <li>Children’s Haircut Basic Fade .............. $25</li>
            <li>Special Cuts .................................... $30</li>
            <li>Special Cuts .................................... $30</li>
            <li>Men’s Haircut .................................. $30</li>
            <li>Men’s Haircut .................................. $30</li>
            <li>Men’s Haircut .................................. $30</li>
            <li>Men’s Haircut .................................. $30</li>
          </ul>
        </FadeIn>
      </Apresentation>
      <Photo className="init-hidden-off" photo={photo2} show={showComponent} classCSS={"slide-in-left"}></Photo>
    </Container>
  );
}

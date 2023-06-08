import styled from "styled-components";
import barber1 from "../assets/barber1.jpeg"
import barber2 from "../assets/barber2.jpeg"
import barber3 from "../assets/barber3.jpeg"
import FadeIn from "./animations/FadeIn";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.section`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10%;
  /* border: solid 1px red; */
  
  h1{
    font-size: 48px;
  }
  
  >div{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: 100%;
    gap: 10px;
    /* border: solid 1px red; */
  }
  
  .box-image{
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 1;
    overflow-y: hidden;
    p{
      position: absolute;
      font-size: 24px;
      color: #fff;
      font-weight: 700;
      bottom: 20px;
      left: 20px;
    }
    img{
      position: absolute;
      object-fit: cover;
      height: 100%;
      width: 100%;
      &:hover{
        filter: brightness(0.6);
        transition: filter 500ms ease-in-out;
      }
    }
  }
`

export const Team = () => {
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

  return(
    <Container ref={targetRef}>
      <h1>The Dream Team</h1>
      <FadeIn show={showComponent}>
        <div>
          <div className="box-image">
            <img src={barber1}/>
            <p>Kristin Watson</p>
          </div>
          <div className="box-image">
            <img src={barber2}/>
            <p>Wade Warren</p>
          </div>
          <div className="box-image">
            <img src={barber3}/>
            <p>Courtney Henry</p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
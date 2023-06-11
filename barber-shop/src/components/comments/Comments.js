import styled from "styled-components";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import star from "../../assets/star.png"
import client from "../../assets/client-1.jpeg"

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10%;
  background-color: #cab19e;
  
  .container-comments{
    /* border: solid 1px red; */
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* gap: 40px; */
    height: 70%;
    width: 100%;
    >span{
      width: 55%;
      height: 100%;
      z-index: 1;
      overflow-y: hidden;
      img{
        /* position: absolute; */
        object-fit: cover;
        width: 100%;
      }
    }
  }
  
  .box-comment{
    height: 100%;
    width: 40%;

    
    span{
      /* border: solid 1px red; */
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 24px;
      height: 70%;
      width: 70%;
    }

    h3{
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 700;
    }



    p{
      font-size: 20px;
      color: #333;
      font-weight: 400;
      line-height: 25px;
      text-align: left;
    }
  }
  
`

export const Comments = () => {
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
      <div className="container-comments">
        <span>
          <img src={client}/>
        </span>
        <div className="box-comment">
          <span>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique felis vel velit aliquam, vel cursus justo placerat. Morbi in sapien at metus fermentum mattis ut eu libero. Aliquam tincidunta."</p>
            <h3>Lorem ipsum</h3>
          </span>
        </div>
      </div>
      
    </Container>
  )
}
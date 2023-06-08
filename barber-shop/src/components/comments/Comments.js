import styled from "styled-components";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import star from "../../assets/star.png"
import client from "../../assets/barber1.jpeg"

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10%;
  background-color: #cab19e;
  /* border: solid 1px red; */
  
  .container-comments{
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 50%;
    width: 100%;
  }
  
  .box-comment{
    height: 90%;
    width: 60%;
    background-color: #fff;
    opacity: 0.9;
    box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.1);
    display: flex;
    /* gap: 28px; */
    
    >span{
      /* border: solid 1px red; */
      width: 40%;
      height: 100%;
      z-index: 1;
      overflow-y: hidden;
      img{
        /* position: absolute; */
        object-fit: cover;
        width: 100%;
      }
    }
    
    div{
      padding: 28px;
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      span{
        display: flex;
        justify-content: center;
        gap: 8px;
        img{
          height: 20px;
        }
      }
    }

    h3{
      font-size: 28px;
      text-transform: uppercase;
    }



    p{
      font-size: 20px;
      color: #333;
      font-weight: 100;
      line-height: 25px;
      text-align: center;
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
        <div className="box-comment">
          <span>
            <img src={client}/>
          </span>
          <div>
            <h3>Lorem ipsum</h3>
            <span>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
            </span>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique felis vel velit aliquam, vel cursus justo placerat. Morbi in sapien at metus fermentum mattis ut eu libero. Aliquam tincidunta."</p>
          </div>
        </div>
      </div>
      
    </Container>
  )
}
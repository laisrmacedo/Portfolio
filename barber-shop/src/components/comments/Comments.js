import styled from "styled-components";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import client from "../../assets/client-1.jpeg"
import FadeIn from "../animations/FadeIn";
import allComments from "./allComments.json"

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
    flex-wrap: wrap;
    @media screen and (max-width: 481px){
        height: 90%;
        justify-content: center;
      }
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
      @media screen and (max-width: 481px){
        width: 100%;
        height: 40%;
      }
    }
  }
  
  .box-comment{
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    @media screen and (max-width: 481px){
      width: 100%;
      height: 60%;
      align-items: center;
    }
    
    >span{
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 24px;
      height: 90%;
      width: 70%;
      @media screen and (max-width: 481px){
        align-items: center;
      }
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
      @media screen and (max-width: 481px){
        text-align: center;
      }
    }
  }
  
  .arrow{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;
    /* border: solid 1px red; */
    @media screen and (max-width: 481px){
      justify-content: center;
      }
    div{
      background-color: #908471;
      color: #cab19e;
      font-size: 36px;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
  .barra{
    width: 40%;
    background-color: #908471;
    height: 5px;
    border-radius: 2px;
    span{
      display: block;
      height: 100%;
      width: calc(100% / (${(props) => (props.length)}));
      background-color: #333;
    }

  }
  
`

export const Comments = () => {
  const targetRef = useRef(null);
  const [showComponent, setShowComponent] = useState(false);
  const [index, setIndex] = useState(0)

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

  }, [index]);

  const changeComment = (btn) => {
    let currentIndex = index + btn
    
    if(currentIndex === allComments.avaliation.length || currentIndex < 0){
      setIndex(0)
    }else{
      setIndex(currentIndex)
    }
  }

  return(
    <Container length={allComments.avaliation.length - index}>
      <div className="container-comments">
        <span ref={targetRef}>
          <FadeIn show={showComponent}>
            <img src={allComments.avaliation[index].image}/>
          </FadeIn>
        </span>
        <div className="box-comment">
          <span>
            <p>{allComments.avaliation[index].comment}</p>
            <h3>{allComments.avaliation[index].name}</h3>
          </span>
          <div className="arrow">
            <div onClick={() => changeComment(-1)}>&lsaquo;</div>
            <span className="barra">
              <span></span>
            </span>
            <div onClick={() => changeComment(1)}>&rsaquo;	</div>
          </div>
        </div>
      </div>
      
    </Container>
  )
}
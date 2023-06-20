import { useEffect, useState } from "react";
import styled from "styled-components";
import Slide from "./animations/Slide";
import FadeIn from "./animations/FadeIn";

const Container = styled.section`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* border: 1px solid red; */
  @media screen and (max-width: 481px){
    width: 100%;
    height: 50%;
  }

  .box-image{
    height: 70%;
    width: 70%;
    position: absolute;
    z-index: 1;
    overflow-y: hidden;
    @media screen and (max-width: 481px){
      width: 90%;
      height: 90%;
    }
    img{
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }


.box-color{
  height: 25%;
  width: 90%;
  background: #908471;
  position: absolute;
  z-index: 0;
  left: 30px;
  bottom: 110px;
  @media screen and (max-width: 481px){
    height: 50%;
    width: 100%;
    left: 0px;
    bottom: 0px;
  }
}

`

export const Photo = (props) => {

  return(
    <Container >
      <div className="box-image">
      <FadeIn show={props.show}>
        <img src={props.photo}/>
      </FadeIn>
      </div>
      <Slide classCSS={props.classCSS} show={props.show}>
        <span className="box-color"></span>  
      </Slide>
    </Container>
  )
}
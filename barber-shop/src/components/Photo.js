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

  .box-image{
    height: 70%;
    width: 70%;
    position: absolute;
    z-index: 1;
    overflow-y: hidden;
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
}

`

export const Photo = (props) => {

  return(
    <Container >
      <div className="box-image">
      <FadeIn show={props.show}>
        <img  className="init-hidden-off" src={props.photo}/>
      </FadeIn>
      </div>
      <Slide classCSS={props.classCSS} show={props.show}>
        <span className="box-color"></span>  
      </Slide>
    </Container>
  )
}
import { useEffect } from "react";
import styled from "styled-components";

import { useRef } from "react";

const Container = styled.section`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  .box-image{
    height: 70%;
    width: 42%;
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
  width: 47%;
  background: #908471;
  position: absolute;
  z-index: 0;
  left: 30px;
  bottom: 110px;
}

`

export const Photo = (props) => {
  const targetRef = useRef(null);
  
  useEffect(() => {
    const callback = (entries, observer) => {
      const photo = document.querySelector('img')
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // O elemento entrou na área visível
          console.log(photo);
        } else {
          // O elemento saiu da área visível
          console.log('Elemento invisível');
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

    // Ao desmontar o componente, pare a observação
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return(
    <Container ref={targetRef}>
      <div className="box-image">
        <img className="init-hidden-off" src={props.photo}/>
      </div>
      <div className="box-color"></div>

    </Container>
  )
}
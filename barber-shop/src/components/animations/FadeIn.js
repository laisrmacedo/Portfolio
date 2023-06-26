import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './animation.css'; // Estilos CSS para a animação

const FadeIn = ({ show, children }) => {
  return (
    <CSSTransition
      in={show}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <>{children}</>
    </CSSTransition>
  );
};

export default FadeIn;

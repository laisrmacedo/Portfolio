import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './SlideIn.css'; // Estilos CSS para a animação

const SlideIn = ({ show, children }) => {
  return (
    <CSSTransition
      in={show}
      timeout={500}
      classNames="slide-in"
      unmountOnExit
    >
      <>{children}</>
    </CSSTransition>
  );
};

export default SlideIn;
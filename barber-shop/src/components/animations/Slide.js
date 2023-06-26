import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './animation.css'; // Estilos CSS para a animação

const Slide = ({ show, classCSS, children }) => {
  return (
    <CSSTransition
      in={show}
      timeout={500}
      classNames={classCSS}
      unmountOnExit
    >
      <>{children}</>
    </CSSTransition>
  );
};

export default Slide;
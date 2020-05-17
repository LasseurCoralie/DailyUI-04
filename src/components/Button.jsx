import React from 'react';
import './ButtonStyled.css';


const Button = ({handleClick, children, typeClass}) => {
  return (
    <div 
      className={`button-wrapper ${typeClass}`}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
}

export default Button;
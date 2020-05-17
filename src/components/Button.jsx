import React from 'react';
import './ButtonStyled.css';

const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
}

const Button = ({handleClick, children}) => {
  return (
    <div 
      className={`button-wrapper ${isOperator(children) ? null : "operator"}`}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
}

export default Button;
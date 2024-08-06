import React from 'react';
import './Button.css';

interface Props {
  buttonType: string
  buttonAction?: () => void
  children?: React.ReactNode;
}

const Button: React.FC<Props> = props => {
  return (
    <button className={props.buttonType} onClick={props.buttonAction}>{props.children}</button>
  );
};

export default Button;

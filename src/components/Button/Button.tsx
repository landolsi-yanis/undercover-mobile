import React from "react";
import "./Button.css";

interface Props {
  buttonType: string;
  buttonValue: string;
  buttonAction?: () => void;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      type="button"
      className={"Button " + props.buttonType}
      onClick={props.buttonAction}
    >
      {props.buttonValue}
    </button>
  );
};

export default Button;

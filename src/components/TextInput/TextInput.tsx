import React, { ChangeEventHandler } from "react";
import "./TextInput.css";

interface Props {
  placeholderValue: string;
  textInputValue?: string;
  textInputChange?: ChangeEventHandler;
}

const TextInput: React.FC<Props> = (props) => {
  return (
    <input
      type="text"
      spellCheck="false"
      autoCorrect="off"
      autoComplete="off"
      className="TextInput"
      placeholder={props.placeholderValue}
      value={props.textInputValue}
      onChange={props.textInputChange}
    />
  );
};

export default TextInput;

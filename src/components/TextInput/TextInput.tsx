import React, { ChangeEventHandler } from 'react';
import './TextInput.css';

interface Props {
  placeholderValue?: string;
  textInputValue?: string;
  textInputChange?: ChangeEventHandler;
  textInputType: string; 
}

const TextInput: React.FC<Props> = props => {
  return (
    <input
      type="text"
      spellCheck="false"
      autoCorrect="off"
      autoComplete="off"
      placeholder={props.placeholderValue}
      value={props.textInputValue}
      onChange={props.textInputChange}
      className={props.textInputType}
    />
  );
};

export default TextInput;

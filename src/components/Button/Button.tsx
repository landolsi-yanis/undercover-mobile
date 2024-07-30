import './Button.css'

interface Props {
    buttonType: string;
    buttonValue: string;
  }

const Button: React.FC<Props> = (props) => {
    return <button type="button" className={"Button " + props.buttonType}>{props.buttonValue}</button>    
  };

export default Button
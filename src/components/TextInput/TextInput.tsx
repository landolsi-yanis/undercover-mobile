import './TextInput.css'

interface Props {
    placeholderValue: String;
  }
  
const TextInput: React.FC<Props> = (props) => {
    return <input type="text" className="TextInput" placeholder={props.placeholderValue} />
  };


export default TextInput
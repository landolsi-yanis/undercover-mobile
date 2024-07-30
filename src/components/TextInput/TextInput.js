import './TextInput.css'

function TextInput(props) {
    return <input type="text" className="TextInput" placeholder={props.placeholderValue} />
}

export default TextInput
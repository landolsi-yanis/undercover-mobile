import './Button.css'

function Button(props) {
    return <button type="button" className={"Button " + props.buttonType}>{props.buttonValue}</button>    
}

export default Button
import '../styles/Button.css'

function Button(props) {
    if(props.buttonType==="purple")
    {
        return <button type="button" className="Button btPurple">{props.buttonValue}</button>
    }
    else if(props.buttonType==="orange")
    {
        return <button type="button" className="Button btOrange">{props.buttonValue}</button>
    }
    
}

export default Button
import Header from './Header'
import TextInput from './TextInput'
import '../styles/App.css'
import Button from './Button'
import PlayerBox from './PlayerBox'




function App() {
    return <div>
        <Header/><br/><br/><br/>
        <TextInput placeholderValue="Set players"/><br/><br/>
        <Button buttonType="purple" buttonValue="ADD +"/><br/><br/>
        <PlayerBox pbValue="Staline" /><br/>
        <PlayerBox pbValue="The Queen" /><br/>
        <PlayerBox pbValue="Obamaster" /><br/>
        <PlayerBox pbValue="Otter" /><br/>
        <Button buttonType="orange" buttonValue="START"/>
        </div>
}

export default App

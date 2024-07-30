import './SetupPlayersPage.css'
import Header from '../../components/Header/Header'
import TextInput from '../../components/TextInput/TextInput'
import Button from '../../components/Button/Button'
import PlayerBox from '../../components/PlayerBox/PlayerBox'

function SetupPlayersPage () {
    return <div>
        <Header/><br/><br/><br/>
        <TextInput placeholderValue="Set players"/><br/><br/>
        <Button buttonType="btPurple" buttonValue="ADD +"/><br/><br/>
        <PlayerBox pbValue="Staline" /><br/>
        <PlayerBox pbValue="The Queen" /><br/>
        <PlayerBox pbValue="Obamaster" /><br/>
        <PlayerBox pbValue="Otter" /><br/>
        <Button buttonType="btOrange" buttonValue="START"/>
        </div>
}

export default SetupPlayersPage
import './SetupPlayersPage.css'
import Header from '../../components/Header/Header'
import TextInput from '../../components/TextInput/TextInput'
import Button from '../../components/Button/Button'
import PlayerBox from '../../components/PlayerBox/PlayerBox'
import PlayerBoxContainer from '../../components/PlayerBoxContainer/PlayerBoxContainer'


function SetupPlayersPage () {
    return <div>
        <Header/>
        <div className="addPlayerContainer">
            <div className="addPlayerContainer80">
                <TextInput placeholderValue="Set players"/>
            </div>
            <div className="addPlayerContainer20">
                 <Button buttonType="btPurple" buttonValue="ADD +"/>
            </div>    
        </div>
        <PlayerBoxContainer>
            <PlayerBox pbValue="Staline" />
            <PlayerBox pbValue="The Queen" />
            <PlayerBox pbValue="Obamaster" />
            <PlayerBox pbValue="Otter" />
            <Button buttonType="btOrange" buttonValue="START"/>
        </PlayerBoxContainer>
        </div>
}

export default SetupPlayersPage
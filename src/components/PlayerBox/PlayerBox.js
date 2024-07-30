import './PlayerBox.css'
import playerPicture from '../../assets/PlayerPicture.png'

function PlayerBox(props) {
    return <div className='PlayerBox '><img src={playerPicture} alt="Player Profile" className="pbPlayerPicture" /> {props.pbValue}
            </div>
}

export default PlayerBox
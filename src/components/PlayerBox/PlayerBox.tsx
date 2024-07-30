import './PlayerBox.css'

import playerPicture from '../../assets/PlayerPicture.png'

interface Props {
    playerPicture: string;
    pbValue: string;
  }

const PlayerBox: React.FC<Props> = (props) => {
    return <div className='PlayerBox'><img src={playerPicture} alt="Player Profile" className="pbPlayerPicture" /> {props.pbValue}
            </div>;
}
export default PlayerBox;
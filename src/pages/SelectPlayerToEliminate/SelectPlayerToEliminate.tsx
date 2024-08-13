import React, { useState } from 'react'
import './SelectPlayerToEliminate.css'
import PlayerBoxContainer from '../../components/PlayerBoxContainer/PlayerBoxContainer'
import PlayerBox from '../../components/PlayerBox/PlayerBox'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import Button from '../../components/Button/Button'
import { Player } from '../../types/Player'
import { useNavigate } from 'react-router-dom'

interface Props {
  players: Player[];
  setPlayers:  React.Dispatch<React.SetStateAction<Player[]>>;
  mrWhiteState: boolean;
  citizensWords: string;
  setCitizensWords: React.Dispatch<React.SetStateAction<string>>;
  undercoversWords: string;
  setUndercoversWords: React.Dispatch<React.SetStateAction<string>>;
  hasSeenWord: string[];
  setHasSeenWord: React.Dispatch<React.SetStateAction<string[]>>;
  selectedPlayer: string;
  setSelectedPlayer: React.Dispatch<React.SetStateAction<string>>;
}

const SelectPlayerToEliminate: React.FC<Props> = (props) => {
  
  const navigate = useNavigate();
  const [pbSelected, setPbSelected] = useState<string>('');

  const toEliminate = () => {
    props.setSelectedPlayer(pbSelected);
    console.log('pbSelected to be eliminated',pbSelected);
    props.setPlayers(prevPlayers => 
    prevPlayers.map(player =>
      player.name === pbSelected
        ? { ...player, eliminated: true}
        : player
    )
  );
    navigate('/ShowEliminatedPlayerPage');
  }

  return (
    <PageWrapper mainContent={<><div className="textWrap">Follow this order.<br /> 
At the end of the round select player to eliminate </div>

      <div className="playersWrap">
        <PlayerBoxContainer>
          {props.players.map((playerEntry, index) =>(<PlayerBox key={index} pbValue={playerEntry.name} pbEye={false} pbAction={() => (playerEntry.eliminated === false && setPbSelected(playerEntry.name))} pbType={playerEntry.eliminated === true ? 'pbDisabled' : ''} pbSelected={pbSelected === playerEntry.name ? true : false} />))}
        </PlayerBoxContainer>
      </div></>}  footerContent={<Button buttonType={'button btOrange'} buttonAction={toEliminate}>Elminate</Button>}/>
      
  )
}

export default SelectPlayerToEliminate
function setSelectedPlayer(pbSelected: string) {
  throw new Error('Function not implemented.')
}


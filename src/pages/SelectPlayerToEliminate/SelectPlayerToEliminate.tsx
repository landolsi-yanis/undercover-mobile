import React from 'react'
import './SelectPlayerToEliminate.css'
import PlayerBoxContainer from '../../components/PlayerBoxContainer/PlayerBoxContainer'
import PlayerBox from '../../components/PlayerBox/PlayerBox'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import Button from '../../components/Button/Button'
import { Player } from '../../types/Player'

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
  return (
    <PageWrapper mainContent={<><div className="textWrap">Follow this order.<br /> 
At the end of the round select player to eliminate </div>

      <div className="playersWrap">
        <PlayerBoxContainer>
          {props.players.map((playerEntry, index) =>(<PlayerBox key={index} pbValue={playerEntry.name} pbEye={props.hasSeenWord.includes(playerEntry.name) ? false : true} pbAction={() => null} pbType={props.hasSeenWord.includes(playerEntry.name) ? 'pbDisabled' : ''} />))}
        </PlayerBoxContainer>
      </div></>}  footerContent={<Button buttonType={'button btOrange'}>Elminate</Button>}/>
      
  )
}

export default SelectPlayerToEliminate

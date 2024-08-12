import React, { ReactNode } from 'react'
import './ShowWordPage.css'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import MessageBox from '../../components/MessageBox/MessageBox'
import playerPicture from '../../assets/playerPicture.png'
import Button from '../../components/Button/Button'
import { Player } from '../../types/Player'

interface Props {
  //Functional props
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

const ShowWordPage: React.FC<Props> = (props) => {

  console.log(props.players.find(player => player.name === props.selectedPlayer))

  return (
    <PageWrapper 
      mainContent={
        <>
          <MessageBox 
          largeHeight={true} 
          headerContent={<><div className='showWWordPagePlayerIdentity'><img src={playerPicture} alt='Player Picture' className='showWWordPagePlayerPicture'/>{props.selectedPlayer}</div><div className='showWWordPagePlayerInfo'>Memorize your word<br/> 
(you will never see it again)</div></>}
          mainContent={<div className='showWWordPageWord'>{props.undercoversWords}</div>} 
          footerContent={<Button buttonType={'button btOrange'}>Ok !</Button>} 
          mainCentered={true} />
        </>} />
      
  )
}

export default ShowWordPage

import React from 'react'
import './ShowEliminatedPlayerPage.css'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import MessageBox from '../../components/MessageBox/MessageBox'
import citizenPicture from '../../assets/citizen.png'
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

const ShowEliminatedPlayerPage: React.FC<Props> = (props) => {

  return (
    <PageWrapper 
      mainContent={
        <>
          <MessageBox 
          largeHeight={false} 
          headerContent={<div className='showEliminatedPlayerPagePlayerRolePictureContainer'><img src={citizenPicture} alt='Role picture' className='showEliminatedPlayerPageRolePicture'/></div>}
          mainContent={<div className='showEliminatedPlayerPageRole'>Otter was<br /><span className='showEliminatedPlayerPageRoleTextBold'>CITIZEN</span></div>} 
          footerContent={<Button buttonType={'button btOrange'}>Ok !</Button>} 
          mainCentered={true} />
        </>} />
      
  )
}

export default ShowEliminatedPlayerPage

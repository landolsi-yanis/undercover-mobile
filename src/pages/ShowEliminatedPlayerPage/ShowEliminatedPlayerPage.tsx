import React from 'react'
import './ShowEliminatedPlayerPage.css'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import MessageBox from '../../components/MessageBox/MessageBox'
import citizenPicture from '../../assets/citizen.png'
import undercoverPicture from '../../assets/undercover.png'
import mrWhitePicture from '../../assets/mrWhite.png'
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

const ShowEliminatedPlayerPage: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const okSubmit = () => {
    props.setSelectedPlayer('');
    navigate('/SelectPlayerToEliminate');
  }

  const getRole = () => {
    return (props.players.find(player => player.name === props.selectedPlayer))?.role;
  }

  const getRolePicture = () => {
  if (getRole() === 'Undercover') {
    return undercoverPicture;
  } else if (getRole() === 'Citizen') {
    return citizenPicture;
  } else if (getRole() === 'Mr White') {
    return mrWhitePicture;
  } 
  return undefined;
};

  return (
    <PageWrapper 
      mainContent={
        <>
          <MessageBox 
          largeHeight={false} 
          headerContent={<div className='showEliminatedPlayerPagePlayerRolePictureContainer'><img src={getRolePicture()} alt='Role picture' className='showEliminatedPlayerPageRolePicture'/></div>}
          mainContent={<div className='showEliminatedPlayerPageRole'>{props.selectedPlayer} was<br /><span className='showEliminatedPlayerPageRoleTextBold'>{getRole()}</span></div>} 
          footerContent={<Button buttonType={'button btOrange'} buttonAction={okSubmit}>Ok !</Button>} 
          mainCentered={true} />
        </>} />
      
  )
}

export default ShowEliminatedPlayerPage

import React, { useState } from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import logo from '../../assets/logo.png';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import PlayerBox from '../../components/PlayerBox/PlayerBox';
import PlayerBoxContainer from '../../components/PlayerBoxContainer/PlayerBoxContainer';
import './SetupPlayersPage.css'
import { useNavigate } from 'react-router-dom';



const SetupPlayersPage = () => {

  const [playerNameInputValue, setPlayerNameInputValue] = useState<string>('');
  const [playersArray, setPlayersArray] = useState<string[]>([]);
  const [minimumPlayers, setMinimumPlayers] = useState<number>(3);
  const minimumPlayersLeft = Array.from({ length: minimumPlayers });
  const [addPlayerButtonState, setAddPlayerButtonState] = useState<boolean>(false);
  const navigate = useNavigate();


  const handleTextInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setPlayerNameInputValue(event.target.value);
  };

  const addPlayer = () => {
    if (playerNameInputValue.trim() !== '')
    {
        setPlayersArray([...playersArray, playerNameInputValue]);
        setPlayerNameInputValue('');
        minimumPlayers <= 3 && setMinimumPlayers(minimumPlayers -1);
        minimumPlayers === 1 && setAddPlayerButtonState(true);

        console.log(minimumPlayers);
    }
    
    console.log(playersArray);
  }

   const startGame = () => {
    if (minimumPlayers === 0) {
      navigate('setupMrWhitePage')
    }
  }

  return (
    <PageWrapper
      headerContent={<><img src={logo} alt="Logo" className='logo' /><div className='addPlayerContainer'><TextInput  textInputType='textInput textInputFlexResize' placeholderValue="Set players" textInputChange={handleTextInputChange} textInputValue={playerNameInputValue} /><Button buttonType={'button btPurple btFlexResize'} buttonAction={addPlayer}>ADD +</Button></div></>}
      mainContent={
        <PlayerBoxContainer>
          {playersArray.map((playerEntry, index) =>(<PlayerBox key={index} pbValue={playerEntry} pbEye={false} />))}
          {minimumPlayersLeft.map((_, index) => (
        <PlayerBox key={index} pbType='pbDashedBorder' pbValue='' pbEye={false} />
      ))}
        </PlayerBoxContainer>}
      footerContent={<Button buttonType={'button btFlexResize' + (addPlayerButtonState ? ' btOrange' : ' btDisabled')} buttonAction={startGame}>Start</Button>}
    />
  );
};

export default SetupPlayersPage;

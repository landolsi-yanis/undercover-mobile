import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SetupPlayersPage from './pages/SetupPlayersPage/SetupPlayersPage';
import './index.css';
import SetupMrWhitePage from './pages/SetupMrWhitePage/SetupMrWhitePage';
import SelectPlayerToDiscoverPage from './pages/SelectPlayerToDiscoverPage/SelectPlayerToDiscoverPage';
import ShowWordPage from './pages/ShowWordPage/ShowWordPage';
import ShowEliminatedPlayerPage from './pages/ShowEliminatedPlayerPage/ShowEliminatedPlayerPage';
import SelectPlayerToEliminate from './pages/SelectPlayerToEliminate/SelectPlayerToEliminate';
import { Player } from './types/Player';  



const App = () => {
  const [playersArray, setPlayersArray] = useState<Player[]>([]);
  const [mrWhiteState, setMrWhiteState] = useState<boolean>(true);
  const [undercoversWords, setUndercoversWords] = useState<string>("");
  const [citizensWords, setCitizensWords] = useState<string>("");
  const [hasSeenWord, setHasSeenWord] = useState<string[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<string>("");
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<SetupPlayersPage players={playersArray} setPlayers={setPlayersArray} />} />
          <Route path="/SetupMrWhitePage" element={<SetupMrWhitePage mrWhiteState={mrWhiteState} setMrWhiteState={setMrWhiteState}  />} />
          <Route path="/SelectPlayerToDiscoverPage" element={<SelectPlayerToDiscoverPage players={playersArray} setPlayers={setPlayersArray} mrWhiteState={mrWhiteState} undercoversWords={undercoversWords} setUndercoversWords={setUndercoversWords} citizensWords={citizensWords} setCitizensWords={setCitizensWords} hasSeenWord={hasSeenWord} setHasSeenWord={setHasSeenWord} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />} />
          <Route path="/ShowWordPage" element={<ShowWordPage players={playersArray} setPlayers={setPlayersArray} mrWhiteState={mrWhiteState} undercoversWords={undercoversWords} setUndercoversWords={setUndercoversWords} citizensWords={citizensWords} setCitizensWords={setCitizensWords} hasSeenWord={hasSeenWord} setHasSeenWord={setHasSeenWord} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />} />
          <Route path="/SelectPlayerToEliminate" element={<SelectPlayerToEliminate  players={playersArray} setPlayers={setPlayersArray} mrWhiteState={mrWhiteState} undercoversWords={undercoversWords} setUndercoversWords={setUndercoversWords} citizensWords={citizensWords} setCitizensWords={setCitizensWords} hasSeenWord={hasSeenWord} setHasSeenWord={setHasSeenWord} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />} />
          <Route path="/ShowEliminatedPlayerPage" element={<ShowEliminatedPlayerPage players={playersArray} setPlayers={setPlayersArray} mrWhiteState={mrWhiteState} undercoversWords={undercoversWords} setUndercoversWords={setUndercoversWords} citizensWords={citizensWords} setCitizensWords={setCitizensWords} hasSeenWord={hasSeenWord} setHasSeenWord={setHasSeenWord} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />} />       
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SetupPlayersPage from './pages/SetupPlayersPage/SetupPlayersPage'
import './index.css';
import SetupMrWhitePage from './pages/SetupMrWhitePage/SetupMrWhitePage';
import SelectPlayerToDiscoverPage from './pages/SelectPlayerToDiscoverPage/SelectPlayerToDiscoverPage';
import ShowWordPage from './pages/ShowWordPage/ShowWordPage';
import ShowEliminatedPlayerPage from './pages/ShowEliminatedPlayerPage/ShowEliminatedPlayerPage';
import SelectPlayerToEliminate from './pages/SelectPlayerToEliminate/SelectPlayerToEliminate';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<SetupPlayersPage />} />
                <Route path="/SetupMrWhitePage" element={<SetupMrWhitePage />} />
                <Route path="/SelectPlayerToDiscoverPage" element={<SelectPlayerToDiscoverPage />} />
                <Route path="/ShowWordPage" element={<ShowWordPage />} />
                <Route path="/ShowEliminatedPlayerPage" element={<ShowEliminatedPlayerPage />} />
                <Route path="/SelectPlayerToEliminate" element={<SelectPlayerToEliminate />} />
            </Routes>
                  </Router>
    </React.StrictMode>,
document.getElementById('root')
)




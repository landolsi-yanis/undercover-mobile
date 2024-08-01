import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './components/App/App'
import './index.css'
import SetupMrWhitePage from './pages/SetupMrWhitePage/SetupMrWhitePage'
import SelectPlayerToDiscoverPage from './pages/SelectPlayerToDiscoverPage/SelectPlayerToDiscoverPage'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/setupMrWhitePage" element={<SetupMrWhitePage />} />
        <Route
          path="/selectPlayerToDiscoverPage"
          element={<SelectPlayerToDiscoverPage />}
        />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

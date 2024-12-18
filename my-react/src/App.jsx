import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ChartsPage from './pages/ChartsPage';
import StatsPage from './pages/StatsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/charts" element={<ChartsPage />} />
                <Route path="/stats" element={<StatsPage />} />
            </Routes>
        </Router>
    );
};

export default App;

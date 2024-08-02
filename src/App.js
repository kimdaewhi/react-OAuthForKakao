import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import KakaoAuth from './components/KakaoAuth';
import KakaoCallback from './components/KakaoCallback';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<KakaoAuth />} />
                    <Route path="/kakao/callback" element={<KakaoCallback />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

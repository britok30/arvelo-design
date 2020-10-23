import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Hero />
            </Router>
        </>
    );
}

export default App;

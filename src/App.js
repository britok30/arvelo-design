import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper"
                >
                    <Route path="/" component={Hero} exact />
                    <Route path="/projects" component={Projects} exact />
                    <Route path="/about" component={About} />
                </AnimatedSwitch>
            </Router>
        </>
    );
}

export default App;

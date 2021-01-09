import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { AnimatedSwitch } from 'react-router-transition';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Pricing from './components/Pricing/Pricing';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" component={Hero} exact />
                    <Route path="/projects" component={Projects} exact />
                    <Route path="/about" component={About} />
                    <Route path="/pricing" component={Pricing} />
                </Switch>
            </Router>
        </>
    );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" component={Hero} exact />
                    <Route path="/projects" component={Projects} exact />
                </Switch>
            </Router>
        </>
    );
}

export default App;

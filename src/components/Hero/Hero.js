import React from 'react';
import { Fade } from 'react-reveal';
import './Hero.css';

const Hero = () => {
    return (
        <>
            <div className="hero-container">
                <div className="inner-container">
                    <Fade bottom duration={3000}>
                        <h1 className="hero-header">Modern Made Simple</h1>
                    </Fade>
                </div>
            </div>
        </>
    );
};

export default Hero;

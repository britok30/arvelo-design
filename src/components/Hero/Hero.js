import React from 'react';
import { Fade } from 'react-reveal';
// import BackgroundSlider from 'react-background-slider';
// import image1 from '../../images/hero.jpg';
// import image2 from '../../images/hero2.jpg';
import './Hero.css';

const Hero = () => {
    const text = 'Every home has the potential to inspire';

    return (
        <>
            <div className="hero-container">
                <div className="inner-container">
                    <Fade bottom duration={3000}>
                        <h1 className="hero-header">{text}</h1>
                    </Fade>
                </div>
            </div>
        </>
    );
};

export default Hero;

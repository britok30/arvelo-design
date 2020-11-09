import React from 'react';
import { Fade } from 'react-reveal';
import BackgroundSlider from 'react-background-slider';
import image1 from '../../images/hero.jpg';
import image2 from '../../images/jonathan-borba-eyZwrNbaCto-unsplash.jpg';
import './Hero.css';

const Hero = () => {
    const text = 'Arvelo Design: Modern Inspiration';

    return (
        <>
            {/* <div className="hero-container">
                <div className="inner-container">
                    <Fade bottom duration={3000}>
                        <h1 className="hero-header">{text.toUpperCase()}</h1>
                    </Fade>
                </div>
            </div> */}
            <BackgroundSlider
                images={[image1, image2]}
                duration={10}
                transition={2}
            />
            {/* <h1 className="hero-header">{text}</h1> */}
        </>
    );
};

export default Hero;

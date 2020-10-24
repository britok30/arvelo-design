import React from 'react';
import Fade from 'react-reveal';
import './About.css';
import Contact from '../Contact/Contact';

const About = () => {
    return (
        <div>
            <div className="container about-container">
                <div className="row about-row">
                    <div className="col-md-7">
                        <Fade bottom duration={3000} distance={'20px'}>
                            <p className="about-p1">
                                Liany Arvelo is a Interior Designer based in
                                North Orlando.
                            </p>
                        </Fade>
                    </div>

                    <div className="col-md-5 col-container">
                        <Fade bottom duration={3000} distance={'20px'}>
                            <p className="about-p2">
                                An early passion & appreciation for beautiful
                                designs and exceptional home layouts is what
                                inspired Liany to pursue a career in interior
                                design. Being Dominican-American, she has a
                                cultural background that has influenced her
                                inspirations when it comes to interior design.
                                After graduating from Seminole State College
                                with her Bachelors Degree in Interior Design,
                                she spent two years perfecting her craft at
                                internships and now currently works for a design
                                company based in Orlando, FL.
                                <br />
                                <br />
                                She offers tailor-made solutions for the layout
                                and decoration of your interior. Each project is
                                born from the meeting between a person and a
                                place, its history, and the desire to project
                                there to live there. Pleasant spaces in which we
                                want to build memories
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default About;

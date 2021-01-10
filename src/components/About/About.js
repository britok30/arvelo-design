import React from 'react';
import './About.css';
import orlando from '../../images/orlando.jpg';
import about from '../../images/about.jpg';
import about2 from '../../images/about2.jpg';
import about3 from '../../images/about3.jpg';
import about7 from '../../images/about7.jpg';
import Contact from '../Contact/Contact';

const About = () => {
    return (
        <div>
            <div className="container about-container">
                <div className="row about-row">
                    <div className="col-md-7">
                        <img className="orlando" src={orlando} alt="orlando" />
                    </div>

                    <div className="col-md-5 col-container">
                        <p className="about-p2">
                            An early passion & appreciation for beautiful
                            designs and exceptional home layouts is what
                            inspired Liany to pursue a career in interior
                            design. Being Dominican-American, she has a cultural
                            background that has influenced her inspirations when
                            it comes to interior design. After graduating from
                            Seminole State College with her Bachelors Degree in
                            Interior Design, she spent two years perfecting her
                            craft while completing internship and now is
                            currently working for a design company based in
                            Orlando, Florida.
                        </p>
                    </div>
                </div>
                <div className="about-hr"></div>
                <div className="row whitespace">
                    <div className="col-md-7 col-container">
                        <p>
                            She offers tailor-made solutions for the layout and
                            decoration of your interior. Each & every project is
                            born from meeting between people and a location, its
                            history, and the desired needs for the client to
                            live there. Pleasant spaces in which we want to
                            build memories.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="about" src={about} alt="about" />
                    </div>
                </div>
                <div className="about-hr"></div>
                <div className="row whitespace">
                    <div className="col-md-7">
                        <img className="about2" src={about2} alt="about" />
                    </div>
                    <div className="col-md-5 col-container">
                        <p>
                            "The designer does not begin with some preconcived
                            idea. Rather, the idea is result of careful study
                            and observation, and the design a product of that
                            idea." - Paul Rand
                        </p>
                    </div>
                </div>
                <div className="about-hr"></div>
                <div className="row whitespace">
                    <div className="col-md-7 col-container">
                        <p>
                            "Design is really an act of communication, which
                            means having a deep understanding of the person with
                            whom the designer is communicating" - Don Norman
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="about3" src={about3} alt="about" />
                    </div>
                </div>
                <div className="about-hr"></div>
                <div className="row whitespace">
                    <div className="col-md-12">
                        <img className="about7" src={about7} alt="about" />
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default About;

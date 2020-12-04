import React from 'react';
import './Contact.css';
import resume from '../../images/Liany_Arvelo_Resume.pdf';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="inner-container">
                <div className="column-1">
                    <p>lianyarvelo@gmail.com</p>
                    <p>(386) 848-8142</p>
                </div>
                <div>
                    <a
                        className="social-link"
                        href="https://linkedin.com/in/liany-arvelo"
                    >
                        Linkedin
                    </a>
                    <a className="social-link" href={resume} download>
                        Resume
                    </a>
                </div>
            </div>
            <div className="bottom-inner-container">
                <p> &copy; Arvelo Design 2020</p>
            </div>
        </div>
    );
};

export default Contact;

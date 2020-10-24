import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="inner-container">
                <div className="column-1">
                    <p>lianyarvelo@gmail.com</p>
                    <p>+000-000-000</p>
                </div>
                <div>
                    <a className="social-link" href="#">
                        Instagram
                    </a>
                    <a className="social-link" href="#">
                        Linkedin
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

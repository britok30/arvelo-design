import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import './Navbar.css';

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
        
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <Fade bottom duration={3000}>
                    <Link className="navbar-brand" to="/">
                        Arvelo Design
                    </Link>
                </Fade>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed ? true : false}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <i
                        className="fas fa-bars"
                        style={{ color: '#fff', fontSize: '28px' }}
                    ></i>
                </button>
                <div
                    className={`${
                        isNavCollapsed ? 'collapse' : ''
                    } navbar-collapse`}
                    id="navbarNav"
                >
                    <Fade bottom cascade duration={3000} delay={2000}>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/projects">
                                    Portfolio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </Fade>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

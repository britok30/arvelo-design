import React from 'react';
import Fade from 'react-reveal';
import ProjectData from '../../data/projects.json';
import './Projects.css';

const Projects = () => {
    const renderCard = ProjectData.map((project) => {
        return (
            <>
                <Fade key={project.id} bottom duration={3000} distance={'1rem'}>
                    <div className="card">
                        <img
                            src={project.image}
                            className="card-img-top"
                            alt={project.alt}
                        />
                        <div className="card-body">
                            <p className="card-text">{project.title}</p>
                        </div>
                    </div>
                </Fade>
            </>
        );
    });

    return (
        <div className="projects-outer-container">
            <div className="container">
                <h1 className="text-center">Projects</h1>
                <div className="cards-column">{renderCard}</div>
            </div>
        </div>
    );
};

export default Projects;

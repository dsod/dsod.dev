import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import Icon from 'components/Images/Icon';
import ProjectItems from 'content/projects.json';

const Projects = () => {
    return (
        <section id='projects' className='container'>
            <div className='row justify-content-center'>
                <div className='col-8 col-md-7 col-lg-6'>
                    <SectionHeader section='Projects' />
                    <div className='row justify-content-center'>
                        <div className='col-8 col-md-6'>
                            {ProjectItems.map((project, index) => (
                                <div key={`project-${index}`} className='card m-lg-3'>
                                    <div className='card-header flex-column'>
                                        <h4>{project.name}</h4>
                                        <p>{project.category}</p>
                                    </div>
                                    <div className='card-cody'>
                                        <p>{project.description}</p>
                                        {project.links.map((link, index) => (
                                            <a key={index} href={link.url}>
                                                <Icon src={link.icon} subFolder='external/' />
                                                {link.name}
                                            </a>
                                        ))}
                                        {project.technologies.map((technology, index) => (
                                            <span key={`technology-${index}`}>
                                                <Icon
                                                    src={technology.icon}
                                                    subFolder='technologies/'
                                                />
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

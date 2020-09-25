import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import Icon from 'components/Images/Icon';
import Image from 'components/Images';
import ProjectItems from 'content/projects.json';

const Projects = () => {
    return (
        <section id='projects' className='container'>
            <div className='row justify-content-center'>
                <div className='col-8 col-md-7 col-lg-6'>
                    <SectionHeader section='Projects' />
                    <div className='row justify-content-center'>
                        <div className='col-8 col-md-7 col-xl-6'>
                            {ProjectItems.map((project, index) => (
                                <div key={`project-${index}`} className='card m-lg-3'>
                                    {project.image ? (
                                        <div className='card-image-wrapper'>
                                            <div className='card-image'>
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.name} image`}
                                                />
                                            </div>
                                            <div className='card-image-overlay'></div>
                                        </div>
                                    ) : (
                                        ''
                                    )}

                                    <div className='card-wrapper'>
                                        <div className='card-header flex-wrap'>
                                            <div className='col-6'>
                                                <h4>{project.name}</h4>
                                                <h5>{project.category}</h5>
                                            </div>
                                        </div>
                                        <div className='card-cody'>
                                            <p>{project.description}</p>
                                            {project.links.map((link, index) => (
                                                <a key={index} href={link.url} target='blank'>
                                                    <Icon src={link.icon} subFolder='external/' />
                                                    {link.name}
                                                </a>
                                            ))}
                                            <div className='d-flex justify-content-center align-items-center m-2'>
                                                {project.technologies.map((technology, index) => (
                                                    <span
                                                        key={`technology-${index}`}
                                                        className='p-2'
                                                    >
                                                        <Icon
                                                            src={technology.icon}
                                                            subFolder='technologies/'
                                                        />
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
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

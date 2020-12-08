import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import Icon from 'components/Images/Icon';
import Image from 'components/Images';
import ProjectItems from 'content/projects.json';
import CallToActionButton from 'components/Shared/CallToActionButton';

const Projects = () => {
    return (
        <section id='projects' className='container'>
            <div className='row justify-content-center'>
                <div className='col-8 col-md-7 col-lg-6'>
                    <SectionHeader section='Projects' />
                    <div className='row justify-content-center'>
                        <div className='col-10 col-md-9 col-xl-8'>
                            {ProjectItems.map((project, index) => (
                                <div key={`project-${index}`} className='project card my-3 m-lg-3'>
                                    {project.image ? (
                                        <div className='card-image-wrapper'>
                                            <div className='card-image'>
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.name} image`}
                                                />
                                            </div>
                                            <div className='card-image-overlay'>
                                                {project.scrollable ? (
                                                    <div className='card-image-overlay-text'>
                                                        scrollable
                                                        <Icon src='arrow-down.svg' />
                                                    </div>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        ''
                                    )}

                                    <div className='card-wrapper'>
                                        <div className='card-header flex-wrap'>
                                            <div className='col-8'>
                                                <h3>{project.name}</h3>
                                                <h4>{project.category}</h4>
                                            </div>
                                        </div>
                                        <div className='card-section mb-0'>
                                            <div className='col-8 d-flex flex-wrap mb-4 project-main-links'>
                                                {project.mainLinks.map((mainLink, index) => (
                                                    <CallToActionButton
                                                        key={`main-link-${index}`}
                                                        iconSrc={mainLink.icon}
                                                        iconSrcSubfolder='external/'
                                                        href={mainLink.url}
                                                        classNames='project-main-link'
                                                        label={`${project.name} link to ${mainLink.name}`}
                                                    >
                                                        <span>{mainLink.name}</span>
                                                    </CallToActionButton>
                                                ))}
                                            </div>
                                            <div className='card-body'>
                                                <div className='row'>
                                                    <p>{project.description}</p>
                                                </div>
                                                <div className='row'>
                                                    <ul className='px-2 my-4'>
                                                        {project.technologies.map(
                                                            (technology, index) => (
                                                                <li
                                                                    key={`technology-${index}`}
                                                                    style={{
                                                                        borderColor:
                                                                            technology.color,
                                                                    }}
                                                                >
                                                                    {technology.icon ? (
                                                                        <Icon
                                                                            src={technology.icon}
                                                                            subFolder='technologies/'
                                                                        />
                                                                    ) : (
                                                                        ''
                                                                    )}

                                                                    {technology.name}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                                {project.projectLinks.length ? (
                                                    <div className='row'>
                                                        <h5>Course Assignments</h5>
                                                        <ul
                                                            className='project-additional-links col-8 px-2'
                                                            key={`link-${index}`}
                                                        >
                                                            {project.projectLinks.map(
                                                                (link, index) => (
                                                                    <li
                                                                        className='project-additional-link'
                                                                        key={`link-${index}`}
                                                                    >
                                                                        <div className='col-8'>
                                                                            <h6>{link.name}</h6>
                                                                        </div>

                                                                        <div className='project-button-wrapper col-8 d-flex justify-content-start flex-wrap'>
                                                                            {link.urls.map(
                                                                                (
                                                                                    linkGroup,
                                                                                    index2
                                                                                ) => (
                                                                                    <CallToActionButton
                                                                                        key={`link-${
                                                                                            index +
                                                                                            index2
                                                                                        }`}
                                                                                        iconSrc={
                                                                                            linkGroup.icon
                                                                                        }
                                                                                        iconSrcSubfolder='external/'
                                                                                        classNames=''
                                                                                        href={
                                                                                            linkGroup.url
                                                                                        }
                                                                                        label={`Link to ${link.name} ${linkGroup.type}`}
                                                                                    >
                                                                                        <span>
                                                                                            {
                                                                                                linkGroup.type
                                                                                            }
                                                                                        </span>
                                                                                    </CallToActionButton>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                ) : (
                                                    ''
                                                )}
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

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
                        <div className='col-8 col-md-6 col-xl-5'>
                            {ProjectItems.map((project, index) => (
                                <div key={`project-${index}`} className='card my-3 m-lg-3'>
                                    {project.image ? (
                                        <div className='card-image-wrapper'>
                                            <div className='card-image'>
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.name} image`}
                                                />
                                            </div>
                                            <div className='card-image-overlay'>
                                                <div className='card-image-overlay-text'>
                                                    scrollable
                                                    <Icon src='arrow-down.svg' />
                                                </div>
                                            </div>
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
                                        <div className='card-section'>
                                            <div className='card-body'>
                                                <div className='row'>
                                                    <div className='col-8 col-lg-5'>
                                                        <p>{project.description}</p>
                                                    </div>
                                                    <div className='col-8 col-lg-3'>
                                                        <ul className='flex-lg-column justify-content-lg-end'>
                                                            {project.technologies.map(
                                                                (technology, index) => (
                                                                    <li
                                                                        key={`technology-${index}`}
                                                                        style={{
                                                                            borderColor:
                                                                                technology.color,
                                                                        }}
                                                                        className='ml-lg-auto'
                                                                    >
                                                                        <Icon
                                                                            src={technology.icon}
                                                                            subFolder='technologies/'
                                                                        />
                                                                        {technology.name}
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                    <div className='col-8'>
                                                        <div className='card-links justify-content-center justify-content-lg-start my-3 my-md-0'>
                                                            {project.links.map((link, index) => (
                                                                <div
                                                                    className='card-link p-2 col-8 col-md-4'
                                                                    key={`link-${index}`}
                                                                >
                                                                    {link.url ? (
                                                                        <a
                                                                            href={link.url}
                                                                            target='blank'
                                                                        >
                                                                            <Icon
                                                                                src={link.icon}
                                                                                subFolder='external/'
                                                                            />
                                                                            {link.name}
                                                                        </a>
                                                                    ) : link.name ? (
                                                                        <p className='card-link-header'>
                                                                            {link.name}
                                                                        </p>
                                                                    ) : (
                                                                        ''
                                                                    )}

                                                                    {link.urls
                                                                        ? link.urls.map(
                                                                              (
                                                                                  linkGroup,
                                                                                  index2
                                                                              ) => (
                                                                                  <a
                                                                                      href={
                                                                                          linkGroup.url
                                                                                      }
                                                                                      target='blank'
                                                                                      key={`link-${
                                                                                          index +
                                                                                          index2
                                                                                      }`}
                                                                                  >
                                                                                      <Icon
                                                                                          src={
                                                                                              linkGroup.icon
                                                                                          }
                                                                                          subFolder='external/'
                                                                                      />
                                                                                      {
                                                                                          linkGroup.type
                                                                                      }
                                                                                  </a>
                                                                              )
                                                                          )
                                                                        : ''}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
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

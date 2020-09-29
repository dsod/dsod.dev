import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import Icon from 'components/Images/Icon';

const About = () => (
    <section id='about' className='container'>
        <div className='row justify-content-center'>
            <div className='col-8 col-md-7 col-lg-6'>
                <SectionHeader section='About' />
                <div className='row'>
                    <div className='col-8 col-lg-4 order-lg-0'>
                        <p>What I aspire to be; a leader that lifts others</p>
                        <p>
                            What I am; team player, ambitious, open and honest, life-long learner,
                            thorough
                        </p>
                        <p>
                            I have rich experience in technical project management, consultancy and
                            system integrations.
                        </p>
                        <p>
                            Recently, my responsibilities grew towards managing development
                            inquiries from customers and internal stakeholders. This is when I
                            realized that I want to work with software development full-time.
                        </p>
                        <p>
                            For the last couple of months, I have invested my time into making this
                            career change a reality.
                        </p>
                    </div>
                    <div className='col-8 col-lg-4 align-self-center ml-lg-auto'>
                        <div className='card mx-0 my-3 m-lg-3'>
                            <div className='card-wrapper'>
                                <div className='card-header'>
                                    <Icon
                                        src='search-icon.svg'
                                        subFolder='about/'
                                        classes='card-icon'
                                    />
                                    <span className='card-title'>Positions of interrest</span>
                                </div>
                                <div className='card-body'>
                                    <ul>
                                        <li>
                                            <Icon src='list-item.svg' />
                                            Product Management
                                        </li>
                                        <li>
                                            <Icon src='list-item.svg' />
                                            Full Stack Web Development
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='card mx-0 my-3 m-lg-3'>
                            <div className='card-wrapper'>
                                <div className='card-header'>
                                    <Icon
                                        src='location-icon.svg'
                                        subFolder='about/'
                                        classes='card-icon'
                                    />
                                    <span className='card-title'>Location</span>
                                </div>
                                <div className='card-body'>
                                    <p>Täby, Stockholm, Sweden</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;

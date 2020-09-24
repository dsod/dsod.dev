import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import Icon from 'components/Images/Icon';

const About = () => (
    <section id='about' className='container'>
        <div className='row justify-content-center'>
            <div className='col-7 col-md-6 col-lg-5'>
                <SectionHeader section='About' />
                <div className='row'>
                    <div className='col-8 col-lg-4 order-lg-0'>
                        <p>
                            I have rich experience in technical project management, consultancy and
                            system integrations.
                        </p>
                        <p>
                            For the last couple of years I have been self-studying software
                            development on the side of my full-time position at a software company.
                        </p>

                        <p>
                            While not coding day-to-day at work, I've accumulated knowledge about
                            software development from a market, sales and customer perspective.
                        </p>

                        <p>
                            When my responsibilities grew closer to software development, I realized
                            that this is what I want to do.
                        </p>

                        <p>
                            For the last couple of months I have been self-studying software
                            development full time.
                        </p>
                    </div>
                    <div className='col-8 col-lg-4 align-self-center ml-lg-auto'>
                        <div className='card'>
                            <div className='card-header'>
                                <Icon
                                    src='search-icon.svg'
                                    subFolder='about/'
                                    classes='card-icon'
                                />
                                <span className='card-title'>Positions of interrest</span>
                            </div>
                            <div className='card-body'>
                                <p>
                                    I look for opportunities in Product Management or Full Stack Web
                                    Development.
                                </p>
                            </div>
                        </div>
                        <div className='card'>
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
    </section>
);

export default About;

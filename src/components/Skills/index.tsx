import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import SkillListItem from './SkillListItem';

const Skills = () => (
    <section id='skills' className='container'>
        <div className='row justify-content-center'>
            <div className='col-8 col-md-7 col-lg-6 position-relative'>
                <SectionHeader section='Skills' />
                <div className='row'>
                    <div className='col-8 col-lg-4'>
                        <ul>
                            <SkillListItem listItem='Problem Solving'>
                                <p>
                                    While this always have come easy to me, problem solving
                                    frequently during a long period of time have given me other
                                    perks, apart from actually finding solutions.
                                </p>
                                <p>
                                    I use situations like this as an opportunity to paint a bigger
                                    picture of how systems, cultures or individuals work.
                                </p>
                                <p>
                                    This allow me to rapidly learn new things, adapt and generate
                                    value to stakeholders within a short period of time.
                                </p>
                            </SkillListItem>
                            <SkillListItem listItem='Defining Requirements'>
                                <p>
                                    When implementing enterprise software into organizations with
                                    varying needs, defining their goals and requirements is key to
                                    success.
                                </p>
                                <p>
                                    I have found that illustrating solutions, in addition to
                                    discussions and documentation, is a great tool to make sure all
                                    parties are on the same page.
                                </p>
                                <p>
                                    Just as important, is defining what is out of scope, in order to
                                    prevent (to much) scope creep.
                                </p>
                                <p>
                                    I have worked close together with a software development team
                                    and have been responsible for defining and reproducing user
                                    stories and bugs respectively, with acceptance test cases and
                                    reproducible steps.
                                </p>
                                <p>
                                    With several years of experience in this area, I feel at home
                                    managing requirements from different stakeholders.
                                </p>
                            </SkillListItem>
                            <SkillListItem listItem='Communication'>
                                <p>
                                    I have experience with managing projects with stakeholders from
                                    several different business areas who have varying levels of
                                    technical knowledge.
                                </p>
                                <p>
                                    While technical forums is where I feel at home, I have grown
                                    custom to adjusting the level of technical terms in discussions
                                    as needed.
                                </p>
                            </SkillListItem>
                            <SkillListItem listItem='Quality Assurement'>
                                <p>
                                    My department was responsible for both acceptance testing and
                                    rolling out new releases of software to customers.
                                </p>

                                <p>
                                    This process was conducted in close collaboration with the
                                    software development team.
                                </p>
                            </SkillListItem>
                        </ul>
                    </div>
                    <div className='col-8 col-lg-4'>dasdsadas</div>
                </div>
            </div>
        </div>
    </section>
);

export default Skills;

import React from 'react';
import SkillItems from 'content/skills.json';
import SectionHeader from '../Shared/SectionHeader';
import Icon from 'components/Images/Icon';
import ProfessionalListItem from './ProfessionalListItem';
import TechnologyListItem from './TechnologyListItem';

const Skills = () => {
    return (
        <section id='skills' className='container'>
            <div className='row justify-content-center'>
                <div className='col-8 col-md-7 col-lg-6 position-relative'>
                    <SectionHeader section='Skills' />
                    <div className='row'>
                        <div className='col-8 col-lg-4'>
                            <div className='card ml-lg-2 my-2'>
                                <div className='card-wrapper'>
                                    <h3>Technological</h3>
                                    {SkillItems.technical.map((skill, index) => (
                                        <div key={`technical-${index}`} className='card-section'>
                                            <div className='card-header'>
                                                <Icon
                                                    src={skill.icon}
                                                    subFolder='technologies/'
                                                    classes='card-icon'
                                                />
                                                <h4>{skill.category}</h4>
                                            </div>
                                            <div className='card-body'>
                                                <ul>
                                                    {skill.technology.map((technology, index) => (
                                                        <TechnologyListItem
                                                            key={`technology-${index}`}
                                                            styles={{ borderColor: skill.color }}
                                                        >
                                                            <Icon
                                                                src={technology.icon}
                                                                subFolder='technologies/'
                                                            />
                                                            {technology.name}
                                                        </TechnologyListItem>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='col-8 col-lg-4'>
                            <div className='card mr-lg-3 my-2'>
                                <div className='card-wrapper'>
                                    <h3 className='mb-4'>Professional</h3>
                                    <ul>
                                        {SkillItems.professional.map((skill, index) => (
                                            <ProfessionalListItem
                                                key={`professional-${index}`}
                                                listItem={skill.name}
                                            >
                                                {skill.texts.map((text, index) => (
                                                    <p key={`text-${index}`}>{text}</p>
                                                ))}
                                            </ProfessionalListItem>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

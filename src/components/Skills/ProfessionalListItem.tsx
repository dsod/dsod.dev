import React, { useState } from 'react';
import CallToActionButton from 'components/Shared/CallToActionButton';

type ProfessionalListItemProps = {
    listItem: string;
};

const ProfessionalListItem: React.FC<ProfessionalListItemProps> = ({ listItem, children }) => {
    const [skillActive, setSkillActive] = useState(false);

    const handleClick = () => {
        setSkillActive(!skillActive);
    };

    return (
        <li className='skills-item'>
            <div
                className='skills-header d-flex align-items-center justify-content-between'
                onClick={handleClick}
            >
                <h4 className='m-0'>{listItem}</h4>
                {skillActive ? (
                    <CallToActionButton
                        iconSrc='collapse-list-item.svg'
                        classNames='skills-accordion'
                        label={`Expand ${listItem} accordion`}
                    />
                ) : (
                    <CallToActionButton
                        iconSrc='expand-list-item.svg'
                        classNames='skills-accordion'
                        label={`Collapse ${listItem} accordion`}
                    />
                )}
            </div>
            <div className={`skills-body ${skillActive ? 'active' : ''}`}>{children}</div>
        </li>
    );
};

export default ProfessionalListItem;

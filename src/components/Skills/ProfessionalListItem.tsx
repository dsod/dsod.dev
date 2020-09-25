import React, { useState } from 'react';
import Icon from 'components/Images/Icon';

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
            <div className='skills-header d-flex align-items-center' onClick={handleClick}>
                {skillActive ? (
                    <Icon src='collapse-list-item.svg' />
                ) : (
                    <Icon src='expand-list-item.svg' />
                )}
                <h5 className='m-0'>{listItem}</h5>
            </div>
            <div className={`skills-body ${skillActive ? 'active' : ''}`}>{children}</div>
        </li>
    );
};

export default ProfessionalListItem;

import React, { useState } from 'react';
import Button from 'components/Shared/Button';

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
                    <Button
                        iconSrc='collapse-list-item.svg'
                        shape='circular'
                        aria-label={`Expand ${listItem} accordion`}
                    />
                ) : (
                    <Button
                        iconSrc='expand-list-item.svg'
                        shape='circular'
                        aria-label={`Collapse ${listItem} accordion`}
                    />
                )}
                <h4 className='h5 m-0'>{listItem}</h4>
            </div>
            <div className={`skills-body ${skillActive ? 'active' : ''}`}>{children}</div>
        </li>
    );
};

export default ProfessionalListItem;

import React from 'react';
import Icon from 'components/Images/Icon';

type SkillListItemProps = {
    listItem: string;
};

const SkillListItem: React.FC<SkillListItemProps> = ({ listItem, children }) => (
    <li>
        <h4 className='skills-header'>
            <Icon src='list-item.svg' />
            {listItem}
        </h4>
        {children}
    </li>
);

export default SkillListItem;

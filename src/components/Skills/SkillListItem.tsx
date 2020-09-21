import React from 'react';
import ListIcon from 'images/icons/list-item.svg';

type SkillListItemProps = {
    listItem: string;
};

const SkillListItem: React.FC<SkillListItemProps> = ({ listItem, children }) => (
    <li>
        <ListIcon />
        <h4 className='skills-header'>{listItem}</h4>
        {children}
    </li>
);

export default SkillListItem;

import React from 'react';

type TechnologyListItemProps = {
    classes?: string;
    styles?: {};
};

const TechnologyListItem: React.FC<TechnologyListItemProps> = ({ classes, styles, children }) => {
    return (
        <li className={classes} style={styles}>
            {children}
        </li>
    );
};

export default TechnologyListItem;

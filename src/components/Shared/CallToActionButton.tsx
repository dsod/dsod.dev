import React, { useRef } from 'react';
import Icon from 'components/Images/Icon';

type CallToActionButtonProps = {
    iconSrc?: string;
    iconSrcSubfolder?: string;
    styles?: {};
    classNames?: string;
    href?: string;
    iconFirst?: boolean;
    toggleElement?: string;
    label: string;
};

const CallToActionButton: React.FC<CallToActionButtonProps> = ({
    iconSrc,
    iconSrcSubfolder,
    styles,
    classNames,
    children,
    href,
    iconFirst = true,
    toggleElement,
    label,
}) => {
    const handleButtonClick = (link: string | undefined, toggleElement: string | undefined) => {
        if (link) {
            window.open(link);
            return;
        }
        if (toggleElement) {
            const element = document.getElementById(toggleElement);
            element!.classList.toggle('active');
        }
    };

    return (
        <button
            className={`${classNames}`}
            style={styles}
            onClick={() => handleButtonClick(href, toggleElement)}
            aria-label={label}
        >
            {!iconFirst ? children : ''}
            {iconSrc ? <Icon src={iconSrc} subFolder={iconSrcSubfolder} /> : ''}
            {iconFirst ? children : ''}
        </button>
    );
};

export default CallToActionButton;

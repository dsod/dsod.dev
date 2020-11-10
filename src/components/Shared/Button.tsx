import React from 'react';
import styled from '@emotion/styled';
import Icon from 'components/Images/Icon';
import * as colors from 'styles/colors';
import * as typo from 'styles/typography';

enum sizes {
    small = '1.5rem',
    medium = '2rem',
    large = '2.5rem',
}

type ButtonProps = JSX.IntrinsicElements['button'] & {
    iconSrc?: string;
    iconFirst?: boolean;
    toggleElement?: string;
    href?: string;
    children?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded' | 'rectangular' | 'circular';
    styling?: 'primary' | 'secondary' | 'ghost' | 'link' | 'cta';
};

const UnstyledButton = ({
    iconSrc,
    iconFirst = true,
    toggleElement,
    href,
    children,
    size,
    shape,
    styling: types,
    ...props
}: ButtonProps) => {
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
        <button onClick={() => handleButtonClick(href, toggleElement)} {...props}>
            {!iconFirst ? children : ''}
            {iconSrc ? <Icon src={iconSrc} /> : ''}
            {iconFirst ? children : ''}
        </button>
    );
};

const buttonSizes = ({ size }) => {
    const styles = {
        large: {
            height: sizes[size],
            padding: '0.5rem 1rem',
            fontSize: '1.125rem',
        },
        medium: {
            height: sizes[size],
            padding: '0.25rem 0.75rem',
            fontSize: '1rem',
        },
        small: {
            height: sizes[size],
            padding: '0rem 0.5rem',
            fontSize: '0.875rem',
        },
    };
    return styles[size];
};

const buttonIconFirst = ({ iconFirst, children }) => ({
    svg: {
        marginLeft: iconFirst && children ? '0.5rem' : 0,
        marginRight: !iconFirst && children ? '0.5rem' : 0,
    },
});

const buttonShape = ({ shape, size }) => {
    console.log(shape, size);
    const style = {
        rounded: {
            borderRadius: '2rem',
        },
        circular: {
            borderRadius: '50%',
            width: sizes[size],
            padding: 0,
            svg: {
                margin: 0,
            },
        },
        rectangular: {
            borderRadius: '2px',
        },
    };
    return style[shape];
};

const buttonType = {
    link: {
        background: 'none',
        border: 'none',
    },
    primary: {},
    secondary: {},
    cta: {},
    ghost: {},
};

const Button = styled(UnstyledButton)(
    {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: typo.headingsFontFamily,
        backgroundColor: 'transparent',
        border: `1px solid ${colors.colorGray}`,
        transition: 'border-color 0.1s, color 0.1s',
        lineHeight: 1,
        cursor: 'pointer',

        '& svg': {
            height: '1em',
            width: '1em',
            path: {
                fill: colors.colorLight,
                transition: 'fill 0.1s',
            },
        },

        '&:hover, &:active': {
            borderColor: colors.colorAccent,
            color: colors.colorAccentDark,

            svg: {
                path: {
                    fill: colors.colorAccentDark,
                },
            },
        },

        '&:focus': {
            outline: 'none',
        },
    },
    ({ size = 'medium' }) => buttonSizes({ size }),
    ({ iconFirst, children }) => buttonIconFirst({ iconFirst, children }),
    ({ shape = 'rounded', size = 'medium' }) => buttonShape({ shape, size }),
    ({ styling = 'primary' }) => buttonType[styling]
);

export default Button;

import React, { createRef, MouseEvent, useEffect, useMemo, useRef, useState } from 'react';

import NavigationItems from 'content/navigation.json';
import Progressbar from './Progressbar';
import Icon from 'components/Images/Icon';
import { useOnScroll } from 'hooks/useOnScroll';
import Button from 'components/Shared/Button';
import { useTheme } from 'emotion-theming';

type SectionPosition = {
    elementId: string;
    offsetTop: number;
    height: number;
};

type SectionPositions = SectionPosition[];

const Navigation: React.FC = () => {
    const navItemElements: React.RefObject<HTMLLIElement>[] = useMemo(
        () => Array.from({ length: NavigationItems.length }).map(() => createRef()),
        []
    );

    const [activeSection, setActiveSection] = useState(0);
    const [navigationOpen, setNavigationOpen] = useState<boolean>(false);

    const pageSections = useRef<SectionPositions>();
    const activeSectionBreakpoint = useRef(0);

    const {theme, isDarkMode, setIsDarkMode} = useTheme()

    useEffect(() => {
        activeSectionBreakpoint.current = window.innerHeight * 0.2;
        pageSections.current = NavigationItems.reduce<SectionPositions>(
            (previousValue, section) => {
                const element = document.getElementById(section.href.split('#')[1]);
                const sectionPosition: SectionPosition = {
                    elementId: section.href,
                    offsetTop: element!.offsetTop,
                    height: element!.scrollHeight,
                };
                sectionPosition ? previousValue.push(sectionPosition) : null;
                return previousValue;
            },
            []
        );
    }, []);

    useOnScroll(
        () => {
            if (!pageSections.current) return;
            const currentBreakpoint = window.scrollY + activeSectionBreakpoint.current;
            pageSections.current.forEach((section, index) => {
                if (
                    currentBreakpoint > section.offsetTop &&
                    currentBreakpoint < section.offsetTop + section.height
                ) {
                    setActiveSection(index);
                }
            });
        },
        [activeSection],
        40
    );

    const handleClick = (event: MouseEvent, anchor: string) => {
        event.preventDefault();
        const element = document.getElementById(anchor.split('#')[1]);
        if (element) {
            element.focus({ preventScroll: true });
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
        if (navigationOpen) toggleNavigation();
    };

    const toggleNavigation = () => {
        setNavigationOpen(!navigationOpen);
    };

    return (
        <nav className='navigation-wrapper'>
            <div className={`navigation-collapsable ${navigationOpen ? 'active' : ''}`}>
                <ul>
                    {NavigationItems.map((navItem, index) => {
                        return (
                            <li
                                key={`nav-item${index}`}
                                onClick={(event) => handleClick(event, navItem.href)}
                                ref={navItemElements[index]}
                                className={index === activeSection ? 'active' : ''}
                            >
                                {index != 0 ? <div className='navigation-separator'></div> : null}
                                <Icon src={`navigation/${navItem.icon}`} />
                                <a href={navItem.href}>{navItem.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {!navigationOpen ? (
                <div className='navigation-contact-wrapper'>
                    <Button
                        iconSrc='about/phone-icon.svg'
                        className='navigation-contact-button m-2'
                        toggleElement='phone'
                        shape='circular'
                        size='large'
                        aria-label='Button to toggle phone number visibility'
                    >
                        <div id='phone' className='navigation-contact-popover'>
                            <a href='tel:+46(0)73 390 29 25'>
                                +46&nbsp;(0)&nbsp;73&nbsp;390&nbsp;29&nbsp;25
                            </a>
                        </div>
                    </Button>
                    <Button
                        iconSrc='about/email-icon.svg'
                        className='navigation-contact-button m-2'
                        toggleElement='email'
                        shape='circular'
                        size='large'
                        aria-label='Button to toggle email visibility'
                    >
                        <div id='email' className='navigation-contact-popover'>
                            <a href='mailto:d.soderling@live.se' className='mx-2'>
                                d.soderling@live.se
                            </a>
                        </div>
                    </Button>
            <button onClick={() => setIsDarkMode(!isDarkMode)} css={{color: theme.colors.text}}>Change theme here</button>
                </div>
            ) : (
                ''
            )}
            <button
                className='navigation-toggle'
                onClick={toggleNavigation}
                aria-label='Toggle Menu on Mobile'
            >
                {navigationOpen ? (
                    <Icon src='navigation/close-nav.svg' />
                ) : (
                    <Icon src='navigation/open-nav.svg' />
                )}
            </button>
            <Progressbar />
        </nav>
    );
};

export default Navigation;

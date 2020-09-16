import React, { useLayoutEffect, useRef } from 'react';

// Not rendered server-side
const isBrowser = typeof window !== `undefined`;

type ScrollPosition = {
    top: number;
    bottom: number;
};

const getScrollYPosition = ({
    element,
    useWindow,
}: {
    element?: HTMLElement;
    useWindow?: boolean | undefined;
}): ScrollPosition => {
    if (!isBrowser) return { top: 0, bottom: 0 };

    const target = element ? element : document.body;
    const position = target?.getBoundingClientRect();

    return useWindow
        ? {
              top: window.scrollY,
              bottom: document.body.clientHeight - window.scrollY,
          }
        : { top: position!.top, bottom: position!.bottom };
};

type UseScrollPositionType = (
    effect: Function,
    element: HTMLElement,
    wait: number,
    useWindow?: boolean
) => void;

const useElementMiddleOfViewport: UseScrollPositionType = (effect, element, wait?, useWindow?) => {
    const middleOfViewport = window.innerHeight / 2;
    const position = getScrollYPosition({ element, useWindow });
    let previouslyMiddleOfViewport =
        position.top <= middleOfViewport && position.bottom >= middleOfViewport;

    const runOnScroll = () => {
        console.log('running on scroll');
        const position = getScrollYPosition({ element, useWindow });

        const currentlyMiddleOfViewport =
            position.top <= middleOfViewport && position.bottom >= middleOfViewport;
        effect({
            previouslyMiddleOfViewport: previouslyMiddleOfViewport,
            currentlyMiddleOfViewport: currentlyMiddleOfViewport,
        });
        previouslyMiddleOfViewport = currentlyMiddleOfViewport;
    };

    let timer: number;
    const handleScroll = () => {
        if (timer) {
            window.clearTimeout(timer);
        }

        timer = window.setTimeout(runOnScroll, wait);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
};
export { useElementMiddleOfViewport };

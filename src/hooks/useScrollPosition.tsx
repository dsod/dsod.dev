import React, { useLayoutEffect, useRef } from 'react';

// Not rendered server-side
const isBrowser = typeof window !== `undefined`;

interface ScrollPosition {
    y: { top: number; bottom: number };
    x: { left: number; right: number };
}

const getScrollPosition = (): ScrollPosition => {
    if (!isBrowser)
        return {
            y: { top: 0, bottom: 0 },
            x: { left: 0, right: 0 },
        };

    return {
        y: {
            top: window.scrollY,
            bottom: document.body.clientHeight - window.scrollY,
        },
        x: {
            left: window.scrollX,
            right: document.body.clientWidth - window.scrollX,
        },
    };
};

interface UseScrollPositionEffect extends ScrollPosition {
    scrollYDirection?: string;
    scrollXDirection?: string;
}

type UseScrollPositionType = (effect: Function, dependencies: any[], wait: number) => void;

const useScrollPosition: UseScrollPositionType = (effect, dependencies, wait?) => {
    const previousPosition = useRef(getScrollPosition());

    const runOnScroll = () => {
        const currentPosition: UseScrollPositionEffect = getScrollPosition();
        currentPosition.scrollYDirection =
            currentPosition.y.top > previousPosition.current.y.top ? 'up' : 'down';
        currentPosition.scrollXDirection =
            currentPosition.x.left > previousPosition.current.x.left ? 'right' : 'left';

        effect(currentPosition);
        previousPosition.current = currentPosition;
    };

    let timer: number;
    useLayoutEffect(() => {
        const handleScroll = () => {
            if (timer) {
                window.clearTimeout(timer);
            }

            timer = window.setTimeout(runOnScroll, wait);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, dependencies);
};
export type { UseScrollPositionEffect };
export { useScrollPosition };

const colors = {
    text: '#e2e2e2',
    header: '#b6b6b6',
    background: '#262626',
    mainBackground:
        'linear-gradient(90deg,rgba(30, 30, 30, 1) 0%,rgba(38, 38, 38, 1) 50%,rgba(30, 30, 30, 1) 100%)',
    headerBackground: 'linear-gradient(31deg, rgba(21, 21, 21, 1) 0%, rgba(54, 54, 54, 1) 100%)',
    // primary: '#00f',
    // secondary: '#00a',
    // highlight: '#ededff',
    primary: ['#33ADFF', '#0A9DFF', '#0082d8', '#006EB8', '#00568F', '#003D66'],
    gray: [
        '#D6D6D6',
        '#C2C2C2',
        '#ADADAD',
        '#999999',
        '#858585',
        '#707070',
        '#5C5C5C',
        '#474747',
        '#333333',
    ],
    modes: {
        dark: {
            text: '#fff',
            background: '#000',
            primary: '#0cf',
            secondary: '#f0e',
            gray: '#222',
            lightgray: '#111',
            highlight: '#001119',
        },
        light: {
            text: '#fff',
            background: '#000',
            primary: '#0cf',
            secondary: '#f0e',
            gray: '#222',
            lightgray: '#111',
            highlight: '#001119',
        },
    },
};

const prism = {
    [['.comment', '.prolog', '.doctype', '.cdata']]: {
        color: 'midgray',
    },
    '.punctuation': {
        color: 'midgray',
    },
    [['.property', '.tag', '.constant', '.symbol', '.deleted']]: {
        color: 'primary',
    },
    [['.boolean', '.number']]: {
        color: 'secondary',
    },
    [['.selector', '.attr-name', '.string', '.char', '.builtin', '.inserted']]: {
        color: 'accent',
    },
    [['.operator', '.entity', '.url', '.string', '.variable']]: {
        color: 'accent',
    },
    [['.atrule', '.attr-value', '.function']]: {
        color: 'primary',
    },
    '.keyword': {
        color: 'primary',
    },
    '.regex': {},
    '.important': {},
};

export default {
    initialColorModeName: 'light',
    colors,
    fonts: {
        body: 'system-ui, sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
    lineHeights: {
        body: 1.75,
        heading: 1.25,
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
        },
        a: {
            color: 'primary',
            '&:hover': {
                color: 'secondary',
            },
        },
        h1: {
            fontSize: [5, 6],
            lineHeight: 'heading',
            a: {
                color: 'inherit',
                textDecoration: 'none',
            },
        },
        h2: {
            fontSize: [4, 5],
            lineHeight: 'heading',
            a: {
                color: 'inherit',
                textDecoration: 'none',
            },
        },
        h3: {
            fontSize: 3,
            lineHeight: 'heading',
            a: {
                color: 'inherit',
                textDecoration: 'none',
            },
        },
        h4: {
            fontSize: 2,
            lineHeight: 'heading',
            a: {
                color: 'inherit',
                textDecoration: 'none',
            },
        },
        h5: {
            fontSize: 1,
            lineHeight: 'heading',
            a: {
                color: 'inherit',
                textDecoration: 'none',
            },
        },
        h6: {
            fontSize: 0,
            lineHeight: 'heading',
            a: {
                color: 'inherit',
                textDecoration: 'none',
            },
        },
        pre: {
            fontFamily: 'monospace',
            fontSize: 1,
            p: 3,
            my: 3,
            bg: 'lightgray',
            overflowX: 'auto',
            ...prism,
        },
        code: {
            fontFamily: 'monospace',
            // fontSize: '87.5%',
        },
        inlineCode: {
            fontFamily: 'monospace',
            color: 'secondary',
            fontSize: '87.5%',
        },
        ul: {
            pl: 3,
            ul: {
                // pl: 2
                // textIndent: '1em',
            },
        },
    },
};

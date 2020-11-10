import React from 'react';
import { Global, css } from '@emotion/core';

import * as colors from './colors';
import * as typo from './typography';

const globalStyles = css({
    html: {
        scrollBehavior: 'smooth',
        scrollbarWidth: 'thin',
        scrollbarColor: `${colors.colorGray} ${colors.colorDark}`,
    },

    '&::-webkit-scrollbar': {
        width: '0.8rem',
    },

    '&::-webkit-scrollbar-track': {
        background: colors.colorDark,
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: colors.colorGray,
        borderRadius: 6,
        border: '1px solid black',
    },

    body: {
        fontFamily: typo.fontFamilyBase,
        fontSize: typo.fontFamilyBase,
        color: colors.colorLight,
    },

    button: {
        fontFamily: typo.fontFamilyBase,
        color: colors.colorLight,
    },

    'h1, h2, h3, h4, h5': {
        fontFamily: typo.headingsFontFamily,
        fontWeight: typo.headingsFontWeight,
        color: colors.colorLight,
    },
    ul: {
        listStyle: 'none',
    },
});

const StyledGlobal = () => <Global styles={[globalStyles]} />;

export default StyledGlobal;

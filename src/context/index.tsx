import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';

import baseTheme from 'styles/theme';

const getTheme = (mode: string) => {
    const colors = baseTheme.colors.modes[mode] ?? baseTheme.colors
    return {...baseTheme, ...{colors: colors}}
}

const AppProviders = ({ children }: { children: React.ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );
    const theme = {
        theme: isDarkMode ? getTheme('dark') : getTheme('light'),
        isDarkMode,
        setIsDarkMode,
    };
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { AppProviders };

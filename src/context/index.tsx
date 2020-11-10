import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';

import { lightTheme, darkTheme } from 'styles/theme';

const AppProviders = ({ children }: { children: React.ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );
    const theme = {
        theme: isDarkMode ? darkTheme : lightTheme,
        isDarkMode,
        setIsDarkMode,
    };
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { AppProviders };

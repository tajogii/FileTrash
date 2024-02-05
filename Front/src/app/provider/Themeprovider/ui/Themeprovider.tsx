import { theme as antdtheme } from "antd" 
import ConfigProvider from "antd/es/config-provider"
import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children?: React.ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        initialTheme,
        children,
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            <ConfigProvider 
                theme={{
                    algorithm: theme === Theme.DARK ? antdtheme.darkAlgorithm : antdtheme.defaultAlgorithm
                }}>
                {children}
            </ConfigProvider>
        </ThemeContext.Provider>
    );
};





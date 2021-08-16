import { jsx as _jsx } from "react/jsx-runtime";
import { darkTextColors, ligthTextColors } from '../../styles/colors';
import { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext, initialData } from './context';
export function ThemeProvider({ children, dark = false }) {
    const [theme] = useState(() => (Object.assign(Object.assign({}, initialData), { dark, colors: {
            text: dark ? darkTextColors : ligthTextColors
        } })));
    return (_jsx(ThemeContext.Provider, Object.assign({ value: theme }, { children: _jsx(StyledThemeProvider, Object.assign({ theme: theme }, { children: children }), void 0) }), void 0));
}

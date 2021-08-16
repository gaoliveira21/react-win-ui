import { bodyFonts, headingFonts } from '../../styles/typography';
import { ligthTextColors } from '../../styles/colors';
import { createContext } from 'react';
export const initialData = {
    dark: false,
    fonts: {
        heading: headingFonts,
        text: bodyFonts
    },
    colors: {
        text: ligthTextColors
    }
};
export const ThemeContext = createContext(initialData);

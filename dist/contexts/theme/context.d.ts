/// <reference types="react" />
import { BodyFonts, HeadingFonts } from '../../styles/typography';
import { TextColors } from '../../styles/colors';
declare type ThemeColors = {
    text: TextColors;
};
export declare type ThemeProviderData = {
    dark: boolean;
    fonts: {
        text: BodyFonts;
        heading: HeadingFonts;
    };
    colors: ThemeColors;
};
export declare const initialData: ThemeProviderData;
export declare const ThemeContext: import("react").Context<ThemeProviderData>;
export {};

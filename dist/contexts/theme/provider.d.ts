/// <reference types="react" />
declare type ThemeProviderProps = {
    children?: React.ReactNode;
    dark?: boolean;
};
export declare function ThemeProvider({ children, dark }: ThemeProviderProps): React.ReactElement;
export {};

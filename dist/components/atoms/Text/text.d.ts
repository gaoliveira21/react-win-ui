/// <reference types="react" />
import { TextTypes } from '../../../styles/colors';
import { BodyFonts } from '../../../styles/typography';
export declare type TextProps = {
    children: React.ReactNode;
    as?: 'p' | 'strong' | 'span' | 'output' | 'i' | 'small';
    variant?: Lowercase<keyof BodyFonts>;
    color?: Lowercase<TextTypes>;
};
export declare function Text({ children, as, variant, color }: TextProps): React.ReactElement;

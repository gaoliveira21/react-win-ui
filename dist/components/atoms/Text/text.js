import { jsx as _jsx } from "react/jsx-runtime";
import * as S from './styles';
export function Text({ children, as = 'p', variant = 'body', color = 'primary' }) {
    return (_jsx(S.Text, Object.assign({ as: as, variant: variant, color: color }, { children: children }), void 0));
}

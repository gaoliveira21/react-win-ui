import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from './text';
export default {
    title: 'Text',
    component: Text
};
export const Basic = (args) => (_jsx(Text, Object.assign({}, args, { children: "Basic Text Component" }), void 0));

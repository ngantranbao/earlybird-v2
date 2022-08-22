"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const intent_1 = require("../../utils/intent");
exports.Input = react_1.default.forwardRef((props, ref) => {
    const { className, intent, leftIcon: LeftIcon, leftElement, rightIcon: RightIcon, large, rightElement } = props, htmlProps = __rest(props, ["className", "intent", "leftIcon", "leftElement", "rightIcon", "large", "rightElement"]);
    const intentClassName = intent_1.getIntentClassname(intent);
    const leftElementSpan = react_1.useRef(null);
    const rightElementSpan = react_1.useRef(null);
    const [paddingLeft, setPaddingLeft] = react_1.useState();
    const [paddingRight, setPaddingRight] = react_1.useState();
    react_1.useEffect(() => {
        const leftThingsWidth = leftElementSpan.current !== null ? leftElementSpan.current.clientWidth + 8 : 0;
        setPaddingLeft(16 + leftThingsWidth);
    });
    react_1.useEffect(() => {
        const rightThingsWidth = rightElementSpan.current !== null ? rightElementSpan.current.clientWidth + 8 : 0;
        setPaddingRight(16 + rightThingsWidth);
    });
    return (react_1.default.createElement("span", { className: classnames_1.default(className, 'ds-input-wrapper') },
        (LeftIcon || leftElement) && (react_1.default.createElement("span", { ref: leftElementSpan, className: "ds-input-left" },
            LeftIcon && (react_1.default.createElement("span", { className: "ds-icon" },
                react_1.default.createElement(LeftIcon, { size: 24 }))),
            leftElement && react_1.default.createElement("span", null, leftElement))),
        react_1.default.createElement("input", Object.assign({ ref: ref, style: { paddingLeft, paddingRight }, className: classnames_1.default(intentClassName, 'ds-input', { large }) }, htmlProps)),
        (RightIcon || rightElement) && (react_1.default.createElement("span", { ref: rightElementSpan, className: "ds-input-right" },
            rightElement && react_1.default.createElement("span", null, rightElement),
            RightIcon && (react_1.default.createElement("span", { className: "ds-icon" },
                react_1.default.createElement(RightIcon, { size: 24 })))))));
});
exports.Input.displayName = 'Input';

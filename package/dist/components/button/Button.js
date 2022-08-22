"use strict";
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
exports.Button = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const intent_1 = require("../../utils/intent");
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Large"] = "large";
    ButtonSize["Small"] = "small";
    ButtonSize["Default"] = "default";
})(ButtonSize || (ButtonSize = {}));
exports.Button = (props) => {
    const { className, intent, children, minimal, size, leftIcon: LeftIcon, rightIcon: RightIcon } = props, htmlProps = __rest(props, ["className", "intent", "children", "minimal", "size", "leftIcon", "rightIcon"]);
    const intentClass = intent_1.getIntentClassname(intent);
    const soleIconButton = [LeftIcon, RightIcon].filter(Boolean).length === 1 && children === undefined;
    return (react_1.default.createElement("button", Object.assign({}, htmlProps, { className: classnames_1.default(className, 'ds-button', intentClass, {
            'ds-minimal': minimal === true,
            'ds-small': size === 'small',
            'ds-large': size === 'large',
            'ds-sole-icon': soleIconButton === true,
        }) }),
        react_1.default.createElement("div", { className: "ds-button-content" },
            LeftIcon && (react_1.default.createElement("span", { className: "ds-icon left" },
                react_1.default.createElement(LeftIcon, { size: size === 'small' ? 20 : 24, color: "currentColor" }))),
            children,
            RightIcon && (react_1.default.createElement("span", { className: "ds-icon right" },
                react_1.default.createElement(RightIcon, { size: size === 'small' ? 20 : 24, color: "currentColor" }))))));
};
exports.Button.sizes = ButtonSize;

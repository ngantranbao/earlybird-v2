"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const types_1 = require("../../commons/types");
const Cross_1 = require("../../icons/Cross");
const intent_1 = require("../../utils/intent");
exports.Tag = props => {
    const { large, leftIcon, rightIcon, interactive, minimal, removable, color, className } = props;
    const intentClass = intent_1.getIntentClassname(color);
    const isIntent = intent_1.isIntentDefined(color);
    return (react_1.default.createElement("span", { style: {
            background: color,
            color: isIntent || color === undefined ? undefined : 'var(--color-white)',
        }, className: classnames_1.default('ds-tag', intentClass, className, {
            minimal: minimal === true,
            interactive: interactive === true && (color === types_1.IntentType.Primary || !color),
            large: large === true,
            removable,
        }) },
        leftIcon ? react_1.default.createElement("span", { className: "left-icon" }, leftIcon) : undefined,
        props.children,
        rightIcon ? react_1.default.createElement("span", { className: "right-icon" }, rightIcon) : undefined,
        removable && (react_1.default.createElement("span", { className: "remove" },
            react_1.default.createElement(Cross_1.CrossIcon, { color: "currentColor" })))));
};

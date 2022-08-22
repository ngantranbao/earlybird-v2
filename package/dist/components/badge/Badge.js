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
exports.Badge = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const types_1 = require("../../commons/types");
const BadgeMask_1 = require("./BadgeMask");
exports.Badge = props => {
    const { value, max = 99, hideZero, intent = types_1.IntentType.Primary, offsetX, offsetY, className, classNameMask, children, style = {} } = props, restProps = __rest(props, ["value", "max", "hideZero", "intent", "offsetX", "offsetY", "className", "classNameMask", "children", "style"]);
    let isDotVariant = false;
    let labelText = '';
    if (value === undefined || value === null) {
        isDotVariant = true;
    }
    else {
        labelText = value <= max ? `${value}` : `${max}+`;
    }
    const isShowBadge = !(hideZero && value === 0);
    const isStandaloneVariant = children === undefined || children === null;
    const offsetStyle = Object.assign(Object.assign({}, style), { bottom: offsetY ? offsetY : 0, right: offsetX ? offsetX : 0 });
    return (react_1.default.createElement("div", { className: classnames_1.default('ds-badge', className) },
        !isStandaloneVariant && children,
        react_1.default.createElement(BadgeMask_1.BadgeMask, Object.assign({}, restProps, { intent: intent, isDot: isDotVariant, isShow: isShowBadge, label: labelText, style: offsetStyle, className: classnames_1.default({
                'ds-badge-dependent': !isStandaloneVariant,
            }, classNameMask) }))));
};

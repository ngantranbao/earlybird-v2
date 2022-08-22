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
exports.Well = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const intent_1 = require("../../utils/intent");
exports.Well = props => {
    const { children, intent, title, icon: Icon, className } = props, restProps = __rest(props, ["children", "intent", "title", "icon", "className"]);
    const intentClass = intent_1.getIntentClassname(intent);
    return (react_1.default.createElement("div", Object.assign({ className: classnames_1.default('ds-well', intentClass, className) }, restProps),
        Icon && react_1.default.createElement(Icon, { size: 20, className: "ds-well-icon" }),
        react_1.default.createElement("div", { className: "ds-well-content" },
            title && react_1.default.createElement("div", { className: "ds-well-title" }, title),
            children)));
};

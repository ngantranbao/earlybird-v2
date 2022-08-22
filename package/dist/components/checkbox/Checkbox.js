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
exports.Checkbox = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const types_1 = require("../../commons/types");
const Minus_1 = require("../../icons/Minus");
const Tick_1 = require("../../icons/Tick");
const intent_1 = require("../../utils/intent");
exports.Checkbox = react_1.forwardRef((props, ref) => {
    const { intent = types_1.IntentType.Primary, label, indeterminated, id, disabled, className } = props, htmlProps = __rest(props, ["intent", "label", "indeterminated", "id", "disabled", "className"]);
    return (react_1.default.createElement("label", { htmlFor: id, className: classnames_1.default('ds-checkbox', className) },
        react_1.default.createElement("input", Object.assign({ ref: ref, className: "ds-checkbox-input", type: "checkbox", id: id, disabled: disabled }, htmlProps)),
        react_1.default.createElement("span", { className: classnames_1.default('ds-checkbox-mask', intent_1.getIntentClassname(intent)) }, !indeterminated ? (react_1.default.createElement(Tick_1.TickIcon, { className: "ds-checkbox-mask-icon", size: 20 })) : (react_1.default.createElement(Minus_1.MinusIcon, { className: "ds-checkbox-mask-icon", size: 20 }))),
        react_1.default.createElement("span", { className: "ds-checkbox-label" }, label)));
});
exports.Checkbox.displayName = 'Checkbox';

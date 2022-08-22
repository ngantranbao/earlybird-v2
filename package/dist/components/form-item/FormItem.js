"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormItem = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const intent_1 = require("../../utils/intent");
exports.FormItem = props => {
    const { className, labelClassName, disabled, intent, inline, label, labelFor, children, helperText, } = props;
    const intentClassName = intent_1.getIntentClassname(intent);
    return (react_1.default.createElement("div", { className: classnames_1.default('ds-form-group', intentClassName, className, {
            'ds-inline': inline === true,
            'ds-disabled': disabled === true,
        }) },
        label && (react_1.default.createElement("label", { htmlFor: labelFor, className: classnames_1.default('ds-label', labelClassName) }, label)),
        react_1.default.createElement("div", null,
            children,
            react_1.default.createElement("div", { className: "ds-helper-text" }, helperText))));
};

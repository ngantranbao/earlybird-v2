"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderThumbLabel = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
exports.SliderThumbLabel = props => {
    // props
    const { value, percent, isAlwaysShowLabel, labelValueRender } = props;
    const leftStyle = {
        left: `${percent}%`,
    };
    return (react_1.default.createElement("span", { className: classnames_1.default('ds-slider-thumb-label', {
            always: isAlwaysShowLabel,
        }), style: leftStyle }, !!labelValueRender ? labelValueRender(value) : value));
};

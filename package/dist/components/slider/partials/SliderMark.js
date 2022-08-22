"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderMark = void 0;
const react_1 = __importDefault(require("react"));
exports.SliderMark = props => {
    // props
    const { value, percent, markValueRender } = props;
    const leftStyle = {
        left: `${percent}%`,
    };
    return (react_1.default.createElement("span", { className: "ds-slider-mark", style: leftStyle }, !!markValueRender ? markValueRender(value) : value));
};

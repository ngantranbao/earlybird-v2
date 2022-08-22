"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularProgress = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const intent_1 = require("../../utils/intent");
const helper_1 = require("./helper");
var ProgresSize;
(function (ProgresSize) {
    ProgresSize["Small"] = "small";
    ProgresSize["Medium"] = "medium";
    ProgresSize["Large"] = "large";
})(ProgresSize || (ProgresSize = {}));
const getSizeAndThickness = (progresSize) => {
    switch (progresSize) {
        case ProgresSize.Small:
            return {
                size: 20,
                thickness: 4,
            };
        case ProgresSize.Medium:
            return {
                size: 40,
                thickness: 6,
            };
        case ProgresSize.Large:
            return {
                size: 100,
                thickness: 8,
            };
    }
};
exports.CircularProgress = props => {
    const { intent, className, value, max = 100, centralLabel, size = ProgresSize.Small } = props;
    const intentClass = intent_1.getIntentClassname(intent);
    const isInfinity = value === undefined || value === null;
    // calc value for static progress
    const { size: sizeNumber, thickness } = getSizeAndThickness(size);
    const circumference = 2 * Math.PI * ((sizeNumber - thickness) / 2);
    const percent = !isInfinity ? helper_1.calcPercentFromValue(value, max) : undefined;
    let circleStyle;
    if (percent !== undefined) {
        circleStyle = {
            strokeDasharray: circumference.toFixed(3),
            strokeDashoffset: `${(((100 - percent) / 100) * circumference).toFixed(3)}px`,
        };
    }
    return (react_1.default.createElement("div", { className: classnames_1.default('ds-circular-progress', size, intentClass, className) },
        react_1.default.createElement("div", { className: "ds-circular-progress-rail" }),
        isInfinity ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "ds-circular-progress-infinite-train" }),
            react_1.default.createElement("div", { className: "ds-circular-progress-infinite-train" }),
            react_1.default.createElement("div", { className: "ds-circular-progress-infinite-train" }),
            react_1.default.createElement("div", { className: "ds-circular-progress-infinite-train" }))) : (react_1.default.createElement("div", { className: "ds-circular-progress-wrapper" },
            react_1.default.createElement("svg", { width: sizeNumber, height: sizeNumber, viewBox: `0 0 ${sizeNumber} ${sizeNumber}`, className: "ds-circular-progress-train-svg" },
                react_1.default.createElement("circle", { className: "ds-circular-progress-train-circle", cx: sizeNumber / 2, cy: sizeNumber / 2, r: (sizeNumber - thickness) / 2, fill: "none", strokeLinecap: "round", strokeWidth: thickness, style: circleStyle })),
            size === ProgresSize.Large && centralLabel && (react_1.default.createElement("div", { className: "ds-circular-progress-info" }, centralLabel))))));
};
exports.CircularProgress.sizes = ProgresSize;

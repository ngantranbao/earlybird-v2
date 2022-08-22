"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearProgress = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const intent_1 = require("../../utils/intent");
const helper_1 = require("./helper");
var ProgresSize;
(function (ProgresSize) {
    ProgresSize["Small"] = "small";
    ProgresSize["Large"] = "large";
})(ProgresSize || (ProgresSize = {}));
exports.LinearProgress = props => {
    const { intent, className, value, max = 100, helperText, size = ProgresSize.Small } = props;
    const intentClass = intent_1.getIntentClassname(intent);
    const isInfinity = value === undefined || value === null;
    const percent = !isInfinity ? helper_1.calcPercentFromValue(value, max) : undefined;
    const trainWidthStyle = {
        width: `${percent}%`,
    };
    return (react_1.default.createElement("div", { className: "ds-linear-progress-container" },
        react_1.default.createElement("div", { className: classnames_1.default('ds-linear-progress', { large: size === ProgresSize.Large }, intentClass, className) }, isInfinity ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: classnames_1.default('ds-linear-progress-train', 'ds-linear-progress-infinite-train-1') }),
            react_1.default.createElement("div", { className: classnames_1.default('ds-linear-progress-train', 'ds-linear-progress-infinite-train-2') }))) : (react_1.default.createElement("div", { className: classnames_1.default('ds-linear-progress-train'), style: trainWidthStyle }))),
        helperText && (react_1.default.createElement("span", { className: classnames_1.default('ds-linear-progress-helper', intentClass) }, helperText))));
};
exports.LinearProgress.sizes = ProgresSize;

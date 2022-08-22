"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EllipsisProgress = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const intent_1 = require("../../utils/intent");
var ProgresSize;
(function (ProgresSize) {
    ProgresSize["Medium"] = "medium";
    ProgresSize["Large"] = "large";
})(ProgresSize || (ProgresSize = {}));
exports.EllipsisProgress = props => {
    const { intent, className, size = ProgresSize.Medium } = props;
    const intentClass = intent_1.getIntentClassname(intent);
    return (react_1.default.createElement("div", { className: classnames_1.default('ds-ellipsis-progress', size, intentClass, className) }, [0, 1, 2].map(key => (react_1.default.createElement("svg", { key: key, className: "ds-ellipsis-progress-dot", width: size === ProgresSize.Large ? 16 : 12, height: size === ProgresSize.Large ? 16 : 12, viewBox: ProgresSize.Large ? '0 0 16 16' : '0 0 12 12', fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.02626 0.242432C9.13248 0.242432 16 7.00275 16 8.00001C16 8.99727 9.13248 15.7576 8.02626 15.7576C6.92004 15.7576 0 8.99727 0 8.00001C0 7.00275 6.92004 0.242432 8.02626 0.242432Z", fill: "currentColor" }))))));
};
exports.EllipsisProgress.sizes = ProgresSize;

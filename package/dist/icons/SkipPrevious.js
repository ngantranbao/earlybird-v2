"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipPreviousIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.SkipPreviousIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.586 12l5.707-5.707a1 1 0 111.414 1.414L12.414 12l4.293 4.293a1 1 0 01-1.414 1.414L9.586 12zM7 18a1 1 0 01-1-1V7a1 1 0 112 0v10a1 1 0 01-1 1z", fill: "" })), "SkipPrevious");

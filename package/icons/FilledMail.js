"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledMailIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledMailIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 5h12c1.7 0 3 1.3 3 3v8.4c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3zm0 2h12c.6 0 1 .4 1 1v.6c0 .4-.2.7-.5.9l-6 3.3c-.3.2-.7.2-1 0l-6-3.3C5.2 9.3 5 9 5 8.6V8c0-.6.4-1 1-1z", fill: "" })), "FilledMail");

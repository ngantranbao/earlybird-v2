"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.QuestionIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z", fill: "" }),
    react_1.default.createElement("path", { d: "M12 17a1 1 0 100-2 1 1 0 000 2zM11 13.1c0-.9.4-1.4 1.2-1.9.9-.5 1.1-.9 1.1-1.5 0-.7-.5-1.1-1.3-1.1-.6 0-1 .3-1.2.9-.2.4-.5.6-.9.6-.6 0-.9-.3-.9-.8 0-.3.1-.6.2-.8.4-.9 1.5-1.5 3-1.5 1.9 0 3.2 1.1 3.2 2.6 0 1-.5 1.7-1.4 2.3-.9.5-1.1.8-1.2 1.4-.1.5-.4.7-.8.7-.7 0-1-.4-1-.9z", fill: "" })), "Question");

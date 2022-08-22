"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledQuestionIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledQuestionIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 15c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1.9-5.1c-.9.5-1.1.8-1.2 1.4-.1.5-.4.7-.8.7-.6 0-.9-.4-.9-.9V13c0-.8.4-1.3 1.2-1.8.9-.5 1.1-.9 1.1-1.5 0-.7-.5-1.1-1.3-1.1-.6 0-1 .3-1.2.9-.2.4-.5.6-.9.6-.6 0-.9-.3-.9-.8 0-.3.1-.6.2-.8.4-.9 1.5-1.5 3-1.5 1.9 0 3.2 1.1 3.2 2.6 0 1-.5 1.7-1.5 2.3z", fill: "" })), "FilledQuestion");

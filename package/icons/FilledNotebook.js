"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledNotebookIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledNotebookIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M19 3H7C5.3 3 4 4.3 4 6v12c0 1.7 1.3 3 3 3h12c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zm-1 16H7c-.6 0-1-.4-1-1s.4-1 1-1h11v2z", fill: "" })), "FilledNotebook");

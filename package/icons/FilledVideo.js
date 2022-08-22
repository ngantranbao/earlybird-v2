"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledVideoIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledVideoIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M21.5 7.1c-.3-.2-.7-.2-1 0L17 9.4v5.3l3.5 2.2c.2.1.4.2.5.2.2 0 .3 0 .5-.1.3-.2.5-.5.5-.9V8c0-.4-.2-.7-.5-.9zM13 6H5C3.3 6 2 7.3 2 9v6c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3z", fill: "" })), "FilledVideo");

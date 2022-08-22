"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledFilterIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledFilterIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M5 3h14c.6 0 1 .4 1 1v2.2c0 .5-.2 1-.6 1.4l-5.1 5.1c-.2.2-.3.4-.3.7v5c0 .4-.2.7-.6.9l-2 1c-.6.3-1.4-.2-1.4-.9v-6c0-.3-.1-.5-.3-.7L4.6 7.6c-.4-.4-.6-.9-.6-1.4V4c0-.6.4-1 1-1z", fill: "" })), "FilledFilter");

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledBellIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledBellIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M19.75 15.4l-1.8-2.7V8c0-3.3-2.7-6-6-6s-6 2.7-6 6v4.7l-1.8 2.7c-.2.3-.2.7 0 1 .2.3.4.6.8.6h14c.4 0 .7-.2.9-.5.2-.3.1-.7-.1-1.1z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 18a1 1 0 011 1c0 .548.452 1 1 1s1-.452 1-1a1 1 0 112 0c0 1.652-1.348 3-3 3s-3-1.348-3-3a1 1 0 011-1z", fill: "" })), "FilledBell");

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrushIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.BrushIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.693 4.307c-.41-.41-.976-.41-1.386 0l-8.536 8.536c.548.366 1.02.838 1.386 1.386l8.536-8.536c.41-.41.41-.976 0-1.386zm-7.747 11.96l9.161-9.16c1.19-1.19 1.19-3.024 0-4.214-1.19-1.19-3.024-1.19-4.214 0l-9.16 9.16A5.012 5.012 0 002 17v4.001a1 1 0 00.999 1h4a5.012 5.012 0 004.946-5.732zM7 14c-1.648 0-3 1.352-3 3v3h3c1.648 0 3-1.352 3-3s-1.352-3-3-3z", fill: "" })), "Brush");

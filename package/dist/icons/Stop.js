"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.StopIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.68 7.094A8 8 0 0016.905 18.32L5.68 7.094zM7.094 5.68L18.32 16.906A8 8 0 007.094 5.68zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z", fill: "" })), "Stop");

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledClockSquareIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledClockSquareIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 2a7 7 0 00-7 7v6a7 7 0 007 7h6a7 7 0 007-7V9a7 7 0 00-7-7H9zm4 4.5a1 1 0 10-2 0V12a1 1 0 00.4.8l4 3a1 1 0 001.2-1.6L13 11.5v-5z", fill: "" })), "FilledClockSquare");

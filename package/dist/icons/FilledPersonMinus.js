"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledPersonMinusIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledPersonMinusIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 5a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z", fill: "" }),
    react_1.default.createElement("path", { d: "M10 11a4 4 0 100-8 4 4 0 000 8zM10 13c-3.9 0-7 3.1-7 7 0 .6.4 1 1 1h12c.6 0 1-.4 1-1 0-3.9-3.1-7-7-7z", fill: "" })), "FilledPersonMinus");

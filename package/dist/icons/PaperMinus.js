"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperMinusIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.PaperMinusIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 5c-.548 0-1 .452-1 1v12c0 .548.452 1 1 1h9c.548 0 1-.452 1-1V8.414l-.007-.007-3.4-3.4A3.192 3.192 0 0114.586 5H8zM5 6c0-1.652 1.348-3 3-3h6.6c.267 0 .534.046.794.161.255.114.454.273.613.432l3.4 3.4c.16.159.318.358.432.613.115.26.161.527.161.794V18c0 1.652-1.348 3-3 3H8c-1.652 0-3-1.348-3-3V6zm4.5 6a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z", fill: "" })), "PaperMinus");

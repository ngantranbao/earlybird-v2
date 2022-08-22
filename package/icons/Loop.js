"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoopIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.LoopIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.207 21.707l-1.414-1.414 1.793-1.793H5a3 3 0 01-3-3V13a1 1 0 112 0v2.5a1 1 0 001 1h12.586l-1.793-1.793 1.414-1.414 4.207 4.207-4.207 4.207zM6.793 2.293l1.414 1.414L6.414 5.5H19a3 3 0 013 3V11a1 1 0 11-2 0V8.5a1 1 0 00-1-1H6.414l1.793 1.793-1.414 1.414L2.586 6.5l4.207-4.207z", fill: "" })), "Loop");

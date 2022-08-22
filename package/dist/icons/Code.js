"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.CodeIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.375 6.22a1 1 0 011.406.155L22.28 12l-4.5 5.625a1 1 0 01-1.562-1.25L19.72 12l-3.5-4.375a1 1 0 01.156-1.406zm-8.75 0a1 1 0 01.156 1.405L4.28 12l3.5 4.375a1 1 0 01-1.562 1.25L1.72 12l4.5-5.625a1 1 0 011.406-.156z", fill: "" })), "Code");

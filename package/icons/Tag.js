"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.TagIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.568 3.568C3.956 3.18 4.473 3 5 3h7.5a1 1 0 01.707.293l7.1 7.1c1.19 1.19 1.19 3.024 0 4.214l-5.7 5.7c-1.19 1.19-3.024 1.19-4.214 0l-7.1-7.1A1 1 0 013 12.5V5c0-.527.18-1.044.568-1.432zM12.086 5H5v7.086l6.807 6.807c.41.41.976.41 1.386 0l5.7-5.7c.41-.41.41-.976 0-1.386L12.086 5z", fill: "" }),
    react_1.default.createElement("path", { d: "M8.9 10.4a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", fill: "" })), "Tag");

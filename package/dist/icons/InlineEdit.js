"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineEditIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.InlineEditIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.193 5.307c-.41-.41-.976-.41-1.386 0l-1.396 1.397 3.642 3.729 1.44-1.44c.41-.41.41-.976 0-1.386l-2.3-2.3zm-.554 6.54l-3.643-3.73L5 16.115V19.8h3.686l7.953-7.953zm-2.246-7.954c1.19-1.19 3.024-1.19 4.214 0l2.3 2.3c1.19 1.19 1.19 3.024 0 4.214l-11.1 11.1a1 1 0 01-.707.293H4a1 1 0 01-1-1v-5.1a1 1 0 01.293-.707l11.1-11.1zM14.8 19.8h6a1 1 0 110 2h-6a1 1 0 110-2z", fill: "" })), "InlineEdit");

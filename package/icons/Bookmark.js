"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.BookmarkIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.8 6c-.448 0-.8.352-.8.8v10.06l3.858-3.227a1 1 0 011.284 0l3.758 3.143V6.8c0-.448-.352-.8-.8-.8H8.8zm10.1 12.564V6.8c0-1.552-1.248-2.8-2.8-2.8H8.8A2.793 2.793 0 006 6.8V19a1 1 0 001.642.767l4.858-4.063 4.529 3.787A1 1 0 0017.9 20h.1a1 1 0 00.9-1.436z", fill: "" })), "Bookmark");

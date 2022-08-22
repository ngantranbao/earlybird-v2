"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledFolderIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledFolderIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M6 5h2.9c.5 0 1.1.2 1.5.6l1.3 1.2c.2.2.4.3.7.3H18c1.7 0 3 1.3 3 3v5.4c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3z", fill: "" })), "FilledFolder");

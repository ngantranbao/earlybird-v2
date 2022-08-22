"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FolderIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 7c-.548 0-1 .452-1 1v8c0 .548.452 1 1 1h12c.548 0 1-.452 1-1V9.9c0-.548-.452-1-1-1h-6a1 1 0 01-.707-.293L9.949 7.263C9.699 7.09 9.426 7 9.2 7H6zM3 8c0-1.652 1.348-3 3-3h3.2c.758 0 1.464.298 2 .7a1 1 0 01.107.093L12.414 6.9H18c1.652 0 3 1.348 3 3V16c0 1.652-1.348 3-3 3H6c-1.652 0-3-1.348-3-3V8z", fill: "" })), "Folder");

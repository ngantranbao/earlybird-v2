"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.NotebookIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 5c-.548 0-1 .452-1 1v12c0 .548.452 1 1 1h11V5H7zM4 6c0-1.652 1.348-3 3-3h12a1 1 0 011 1v16a1 1 0 01-1 1H7c-1.652 0-3-1.348-3-3V6z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 17c-.548 0-1 .452-1 1s.452 1 1 1h11v-2H7zm-3 1c0-1.652 1.348-3 3-3h12a1 1 0 011 1v4a1 1 0 01-1 1H7c-1.652 0-3-1.348-3-3z", fill: "" })), "Notebook");

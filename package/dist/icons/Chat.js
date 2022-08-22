"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ChatIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 12c0-4.952 4.048-9 9-9s9 4.048 9 9-4.048 9-9 9a8.68 8.68 0 01-4.128-1.028l-3.607.992a1 1 0 01-1.23-1.23l.993-3.606A8.679 8.679 0 013 12zm9-7c-3.848 0-7 3.152-7 7 0 1.307.345 2.435.964 3.496a1 1 0 01.1.77l-.633 2.304 2.304-.634a1 1 0 01.769.1c1.061.62 2.189.964 3.496.964 3.848 0 7-3.152 7-7s-3.152-7-7-7z", fill: "" }),
    react_1.default.createElement("path", { d: "M8.5 13a1 1 0 100-2 1 1 0 000 2zM12 13a1 1 0 100-2 1 1 0 000 2zM15.5 13a1 1 0 100-2 1 1 0 000 2z", fill: "" })), "Chat");

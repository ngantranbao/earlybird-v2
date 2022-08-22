"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.MouseIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5C9.752 5 8 6.752 8 9v6c0 2.248 1.752 4 4 4s4-1.752 4-4V9c0-2.248-1.752-4-4-4zM6 9c0-3.352 2.648-6 6-6s6 2.648 6 6v6c0 3.352-2.648 6-6 6s-6-2.648-6-6V9zm6-2a1 1 0 011 1v2a1 1 0 11-2 0V8a1 1 0 011-1z", fill: "" })), "Mouse");

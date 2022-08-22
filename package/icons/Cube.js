"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.CubeIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.594 2.086a1 1 0 01.812 0l9 4A1 1 0 0122 7v10a1 1 0 01-.594.914l-8.995 3.997a1.006 1.006 0 01-.822 0l-8.995-3.997A1 1 0 012 17V7a1 1 0 01.594-.914l9-4zM4 8.54v7.811l7 3.111V11.65L4 8.539zm9 3.11v7.812l7-3.11V8.538l-7 3.11zM5.462 7L12 9.906 18.538 7 12 4.094 5.462 7z", fill: "" })), "Cube");

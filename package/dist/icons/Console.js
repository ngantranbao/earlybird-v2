"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ConsoleIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 8c-2.248 0-4 1.752-4 4s1.752 4 4 4h10c2.248 0 4-1.752 4-4s-1.752-4-4-4H7zm-6 4c0-3.352 2.648-6 6-6h10c3.352 0 6 2.648 6 6s-2.648 6-6 6H7c-3.352 0-6-2.648-6-6z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.25 9.75v4.5h-1.5v-4.5h1.5z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 11.25h4.5v1.5h-4.5v-1.5z", fill: "" }),
    react_1.default.createElement("path", { d: "M16.5 11.1a.8.8 0 100-1.6.8.8 0 000 1.6zM16.5 14.5a.8.8 0 100-1.6.8.8 0 000 1.6zM18.2 12.8a.8.8 0 100-1.6.8.8 0 000 1.6zM14.8 12.8a.8.8 0 100-1.6.8.8 0 000 1.6z", fill: "" })), "Console");

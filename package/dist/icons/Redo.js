"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedoIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.RedoIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.896 4.043l-1.414 1.414 3.104 3.104H8.75a5.75 5.75 0 100 11.5h3.75a1 1 0 100-2H8.75a3.75 3.75 0 110-7.5h7.836l-3.104 3.103 1.414 1.414 5.518-5.517-5.518-5.518z", fill: "" })), "Redo");

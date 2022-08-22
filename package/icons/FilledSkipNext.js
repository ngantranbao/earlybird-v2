"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledSkipNextIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledSkipNextIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M14 12l-4.293 4.293c-.63.63-1.707.184-1.707-.707V8.414c0-.89 1.077-1.337 1.707-.707L14 12z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14 16.5a1 1 0 01-1-1v-7a1 1 0 112 0v7a1 1 0 01-1 1z", fill: "" })), "FilledSkipNext");

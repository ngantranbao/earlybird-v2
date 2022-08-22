"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastForwardIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FastForwardIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 13l-3.293 3.293c-.63.63-1.707.184-1.707-.707V8.414c0-.89 1.077-1.337 1.707-.707L12 11V8.414c0-.89 1.077-1.337 1.707-.707L18 12l-4.293 4.293c-.63.63-1.707.184-1.707-.707V13z", fill: "" })), "FastForward");

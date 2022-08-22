"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.MenuIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 7a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z", fill: "" })), "Menu");

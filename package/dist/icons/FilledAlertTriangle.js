"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledAlertTriangleIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledAlertTriangleIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M20.8 17.1L13.3 4c-.8-1.3-2.7-1.3-3.5 0L2.3 17.1c-.8 1.3.2 3 1.7 3h15.1c1.5 0 2.5-1.7 1.7-3zm-9.3.4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-4h-2v-5h2v5z", fill: "" })), "FilledAlertTriangle");

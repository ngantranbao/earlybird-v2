"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShieldIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ShieldIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.504 2.132a1 1 0 01.992 0l7 4A1 1 0 0120 7v5.7a9.13 9.13 0 01-5.421 8.326l-2.2.9a1 1 0 01-.758 0l-2.2-.9A9.13 9.13 0 014 12.7V7a1 1 0 01.504-.868l7-4zM6 7.58v5.12a7.13 7.13 0 004.194 6.48l1.806.74 1.806-.74A7.13 7.13 0 0018 12.7V7.58l-6-3.428L6 7.58z", fill: "" })), "Shield");

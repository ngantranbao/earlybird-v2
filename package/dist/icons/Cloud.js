"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.CloudIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.063 10.605C5.508 7.465 8.251 5 11.5 5a6.498 6.498 0 016.167 4.503C20.045 9.593 22 11.603 22 14c0 2.452-2.048 4.5-4.5 4.5H6c-2.252 0-4-1.748-4-4 0-1.928 1.281-3.487 3.063-3.895zM11.5 7C9.052 7 7 9.052 7 11.5a1 1 0 01-1 1c-1.148 0-2 .852-2 2 0 1.148.852 2 2 2h11.5c1.348 0 2.5-1.152 2.5-2.5s-1.152-2.5-2.5-2.5a3.878 3.878 0 00-.174.005 1 1 0 01-1.414-.753C15.587 8.641 13.707 7 11.5 7z", fill: "" })), "Cloud");

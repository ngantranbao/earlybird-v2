"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledTagIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledTagIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M20.3 10.4l-6.8-6.8c-.4-.4-.9-.6-1.4-.6H5c-1.1 0-2 .9-2 2v7.1c0 .5.2 1 .6 1.4l6.8 6.8c.6.6 1.4.9 2.1.9.8 0 1.5-.3 2.1-.9l5.7-5.7c1.1-1.2 1.1-3.1 0-4.2zm-11.8.1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z", fill: "" })), "FilledTag");

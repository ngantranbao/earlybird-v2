"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledCalendarIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledCalendarIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M10 16h4c.6 0 1-.4 1-1s-.4-1-1-1h-4c-.6 0-1 .4-1 1s.4 1 1 1z", fill: "" }),
    react_1.default.createElement("path", { d: "M19 5h-1V4c0-.6-.4-1-1-1s-1 .4-1 1v1H8V4c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 5 2 6.3 2 8v10c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V8c0-1.7-1.3-3-3-3zm1 13c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v7z", fill: "" })), "FilledCalendar");

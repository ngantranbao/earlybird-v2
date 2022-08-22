"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.CalendarIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 3a1 1 0 011 1v1h8V4a1 1 0 112 0v1h1c1.652 0 3 1.348 3 3v10c0 1.652-1.348 3-3 3H5c-1.652 0-3-1.348-3-3V8c0-1.652 1.348-3 3-3h1V4a1 1 0 011-1zM6 7H5c-.548 0-1 .452-1 1v2h16V8c0-.548-.452-1-1-1h-1v1a1 1 0 11-2 0V7H8v1a1 1 0 01-2 0V7zm14 5H4v6c0 .548.452 1 1 1h14c.548 0 1-.452 1-1v-6zM9 16a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z", fill: "" })), "Calendar");

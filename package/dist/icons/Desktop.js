"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesktopIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.DesktopIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 5c-.548 0-1 .452-1 1v8c0 .548.452 1 1 1h14c.548 0 1-.452 1-1V6c0-.548-.452-1-1-1H5zM2 6c0-1.652 1.348-3 3-3h14c1.652 0 3 1.348 3 3v8c0 1.652-1.348 3-3 3h-6v2h3a1 1 0 110 2H8a1 1 0 110-2h3v-2H5c-1.652 0-3-1.348-3-3V6z", fill: "" })), "Desktop");

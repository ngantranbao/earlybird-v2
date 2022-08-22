"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.BrowserIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 7c0-1.652 1.348-3 3-3h14c1.652 0 3 1.348 3 3v10c0 1.652-1.348 3-3 3H5c-1.652 0-3-1.348-3-3V7zm3-1c-.548 0-1 .452-1 1v10c0 .548.452 1 1 1h14c.548 0 1-.452 1-1V7c0-.548-.452-1-1-1H5z", fill: "" }),
    react_1.default.createElement("path", { d: "M6 9a1 1 0 100-2 1 1 0 000 2zM9 9a1 1 0 100-2 1 1 0 000 2z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 11a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z", fill: "" })), "Browser");

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipboardCheckIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ClipboardCheckIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 6c0-1.652 1.348-3 3-3h10c1.652 0 3 1.348 3 3v13c0 1.652-1.348 3-3 3H7c-1.652 0-3-1.348-3-3V6zm3-1c-.548 0-1 .452-1 1v13c0 .548.452 1 1 1h10c.548 0 1-.452 1-1V6c0-.548-.452-1-1-1H7z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 3a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1V3zM15.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z", fill: "" })), "ClipboardCheck");

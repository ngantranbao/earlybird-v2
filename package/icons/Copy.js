"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.CopyIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 5c-.548 0-1 .452-1 1v5.4c0 .548.452 1 1 1h5.4c.548 0 1-.452 1-1V6c0-.548-.452-1-1-1H6zM3 6c0-1.652 1.348-3 3-3h5.4c1.652 0 3 1.348 3 3v5.4c0 1.652-1.348 3-3 3H6c-1.652 0-3-1.348-3-3V6zm13.2 4.6a1 1 0 011-1h.8c1.652 0 3 1.348 3 3V18c0 1.652-1.348 3-3 3h-5.4c-1.652 0-3-1.348-3-3v-.8a1 1 0 112 0v.8c0 .548.452 1 1 1H18c.548 0 1-.452 1-1v-5.4c0-.548-.452-1-1-1h-.8a1 1 0 01-1-1z", fill: "" })), "Copy");

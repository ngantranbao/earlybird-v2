"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ImageIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 5c-.548 0-1 .452-1 1v12.1c0 .548.452 1 1 1h14c.548 0 1-.452 1-1V6c0-.548-.452-1-1-1H5zM2 6c0-1.652 1.348-3 3-3h14c1.652 0 3 1.348 3 3v12.1c0 1.652-1.348 3-3 3H5c-1.652 0-3-1.348-3-3V6z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.893 8.693c1.19-1.19 3.024-1.19 4.214 0l2.6 2.6a1 1 0 01-1.414 1.414l-2.6-2.6c-.41-.409-.975-.41-1.385-.001v.001L5.71 20.804a1 1 0 01-1.42-1.408l10.6-10.7.003-.003z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.893 11.893c1.19-1.19 3.024-1.19 4.214 0l2 2a1 1 0 01-1.414 1.414l-2-2c-.41-.41-.976-.41-1.386 0l-2.6 2.6a1 1 0 01-1.414-1.414l2.6-2.6z", fill: "" }),
    react_1.default.createElement("path", { d: "M10.5 10.1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", fill: "" })), "Image");

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.MusicIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.234 2.136C19.226 1.542 21 3.1 21 5v11.4a3 3 0 11-2-2.83V5c0-.692-.61-1.128-1.206-.944l-.052.014-8 2A.927.927 0 009 7v12.4a3 3 0 11-1.999-2.83V7c0-1.338.895-2.56 2.269-2.873l7.965-1.991zM7 19.4a1 1 0 10-2 0 1 1 0 002 0zm12-3a1 1 0 10-2 0 1 1 0 002 0z", fill: "" })), "Music");

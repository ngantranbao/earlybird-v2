"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledSpeakerIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledSpeakerIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M11.4 9.5H7v5.2h4.4l5.6 3.5V6l-5.6 3.5z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.485 5.125A1 1 0 0118 6v12.2a1 1 0 01-1.53.848L11.113 15.7H7a1 1 0 01-1-1V9.5a1 1 0 011-1h4.113l5.357-3.348a1 1 0 011.015-.027zM16 7.805l-4.07 2.543a1 1 0 01-.53.152H8v3.2h3.4a1 1 0 01.53.152L16 16.396V7.804z", fill: "" })), "FilledSpeaker");

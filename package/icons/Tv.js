"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.TvIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.4 3.2a1 1 0 011.4.2L12 6.333 14.2 3.4a1 1 0 011.6 1.2l-1.875 2.5H18c1.652 0 3 1.348 3 3V18c0 1.652-1.348 3-3 3H6c-1.652 0-3-1.348-3-3v-7.9c0-1.652 1.348-3 3-3h4.075L8.2 4.6a1 1 0 01.2-1.4zM6 9.1c-.548 0-1 .452-1 1V18c0 .548.452 1 1 1h12c.548 0 1-.452 1-1v-7.9c0-.548-.452-1-1-1H6z", fill: "" })), "Tv");

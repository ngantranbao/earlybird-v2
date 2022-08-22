"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledStarIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledStarIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M21 9.5c-.1-.4-.4-.6-.8-.7l-5-.7-2.3-4.6c-.3-.7-1.5-.7-1.8 0L8.9 8l-5 .7c-.4.1-.7.4-.9.8-.1.4 0 .8.3 1L6.9 14 6 19c-.1.4.1.8.4 1 .3.2.7.3 1.1.1l4.5-2.4 4.5 2.4c.1.1.3.1.5.1s.4-.1.6-.2c.3-.2.5-.6.4-1l-.9-5 3.6-3.5c.3-.3.4-.7.3-1z", fill: "" })), "FilledStar");

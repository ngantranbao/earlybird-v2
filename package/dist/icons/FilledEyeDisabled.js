"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledEyeDisabledIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledEyeDisabledIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("g", { clipPath: "url(#filled-eye-disabled_svg__clip0)", fill: "" },
        react_1.default.createElement("path", { d: "M10.9 8c.6-.2 1.2-.2 1.8-.1 1.6.3 2.8 1.6 3.2 3.2.1.6.1 1.2-.1 1.8l2.9 2.9c1.2-.9 2.1-2 2.9-3.1.4-.5.4-1.2 0-1.7-1.8-2.5-4.8-5.4-9.6-5.4-1.1 0-2.1.2-3 .4l1.9 2zM12.9 15.7c-.3.1-.7.2-1 .2-.3 0-.5 0-.8-.1-1.6-.3-2.8-1.6-3.1-3.1-.1-.7-.1-1.3 0-1.9L5.1 7.9C3.9 8.9 3 10 2.3 11c-.4.5-.4 1.2 0 1.7 1.8 2.5 4.8 5.4 9.6 5.4 1.1 0 2.1-.2 3-.4l-2-2zM19.8 20.8c-.3 0-.5-.1-.7-.3L3.3 4.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L20.5 19c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" })),
    react_1.default.createElement("defs", null,
        react_1.default.createElement("clipPath", { id: "filled-eye-disabled_svg__clip0" },
            react_1.default.createElement("path", { fill: "#fff", transform: "translate(2 3)", d: "M0 0h19.8v17.8H0z" })))), "FilledEyeDisabled");

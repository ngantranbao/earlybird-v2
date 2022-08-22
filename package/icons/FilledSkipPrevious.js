"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledSkipPreviousIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledSkipPreviousIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M10 12l4.293-4.293c.63-.63 1.707-.184 1.707.707v7.172c0 .89-1.077 1.337-1.707.707L10 12z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 7.5a1 1 0 011 1v7a1 1 0 11-2 0v-7a1 1 0 011-1z", fill: "" })), "FilledSkipPrevious");

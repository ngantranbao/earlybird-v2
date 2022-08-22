"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastRewindIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FastRewindIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 11l3.293-3.293c.63-.63 1.707-.184 1.707.707v7.172c0 .89-1.077 1.337-1.707.707L12 13v2.586c0 .89-1.077 1.337-1.707.707L6 12l4.293-4.293c.63-.63 1.707-.184 1.707.707V11z", fill: "" })), "FastRewind");

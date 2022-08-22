"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleArrowUpIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.CircleArrowUpIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.537 11.488l-1.417 1.413-2.226-2.232v5.081a1 1 0 11-2 0v-5.086l-2.187 2.187-1.414-1.414 4.602-4.602 4.642 4.653z", fill: "" })), "CircleArrowUp");

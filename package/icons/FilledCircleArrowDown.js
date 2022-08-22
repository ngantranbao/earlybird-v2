"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledCircleArrowDownIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledCircleArrowDownIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-4.708-9.488l3.934 3.944.707.71.708-.709 3.894-3.894-1.414-1.414-2.187 2.187V8.25a1 1 0 10-2 0v5.081L8.708 11.1l-1.416 1.413z", fill: "" })), "FilledCircleArrowDown");

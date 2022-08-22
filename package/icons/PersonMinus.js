"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonMinusIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.PersonMinusIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 5a2 2 0 100 4 2 2 0 000-4zM6 7a4 4 0 118 0 4 4 0 01-8 0zm10-3a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm-6 11c-2.748 0-5 2.252-5 5a1 1 0 11-2 0c0-3.852 3.148-7 7-7s7 3.148 7 7a1 1 0 11-2 0c0-2.748-2.252-5-5-5z", fill: "" })), "PersonMinus");

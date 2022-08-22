"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.PeopleIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 5a2 2 0 100 4 2 2 0 000-4zM5 7a4 4 0 118 0 4 4 0 01-8 0zm12 1.9a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0zM9 15c-2.748 0-5 2.252-5 5a1 1 0 11-2 0c0-3.852 3.148-7 7-7 1.927 0 3.678.788 4.947 2.058A5.068 5.068 0 0117 14c2.752 0 5 2.248 5 5a1 1 0 11-2 0c0-1.648-1.352-3-3-3-.666 0-1.342.256-1.854.658.544.995.854 2.134.854 3.342a1 1 0 11-2 0c0-2.748-2.252-5-5-5z", fill: "" })), "People");

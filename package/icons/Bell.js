"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BellIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.BellIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 8c0-3.352 2.648-6 6-6s6 2.648 6 6v4.697l1.832 2.748A1 1 0 0119 17H5a1 1 0 01-.832-1.555L6 12.697V8zm6-4C9.752 4 8 5.752 8 8v5a1 1 0 01-.168.555L6.869 15H17.13l-.963-1.445A1 1 0 0116 13V8c0-2.248-1.752-4-4-4zm-2 14a1 1 0 011 1c0 .548.452 1 1 1s1-.452 1-1a1 1 0 112 0c0 1.652-1.348 3-3 3s-3-1.348-3-3a1 1 0 011-1z", fill: "" })), "Bell");

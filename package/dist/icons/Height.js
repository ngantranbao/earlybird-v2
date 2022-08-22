"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeightIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.HeightIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.793 16.207l1.414-1.414L11 17.586V4a1 1 0 112 0v13.586l2.793-2.793 1.414 1.414L12 21.414l-5.207-5.207z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.207 7.793l-1.414 1.414L12 5.414 8.207 9.207 6.793 7.793 12 2.586l5.207 5.207z", fill: "" })), "Height");

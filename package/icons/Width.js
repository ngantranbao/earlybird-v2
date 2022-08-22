"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidthIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.WidthIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.793 6.793l1.414 1.414L6.414 11H20a1 1 0 110 2H6.414l2.793 2.793-1.414 1.414L2.586 12l5.207-5.207z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.207 17.207l-1.414-1.414L18.586 12l-3.793-3.793 1.414-1.414L21.414 12l-5.207 5.207z", fill: "" })), "Width");

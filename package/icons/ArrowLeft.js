"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowLeftIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ArrowLeftIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.604 5.982l1.414 1.414L6.914 10.5H19.5a1 1 0 110 2H6.914l3.104 3.104-1.414 1.414L3.086 11.5l5.518-5.518z", fill: "" })), "ArrowLeft");

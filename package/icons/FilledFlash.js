"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledFlashIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledFlashIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M6 14h6l-1 7 7-11h-6l1-7-7 11z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.347 2.062a1 1 0 01.643 1.08L13.153 9H18a1 1 0 01.844 1.537l-7 11a1 1 0 01-1.834-.678L10.847 15H6a1 1 0 01-.844-1.537l7-11a1 1 0 011.19-.4zM7.822 13H12a1 1 0 01.99 1.141l-.344 2.41L16.178 11H12a1 1 0 01-.99-1.141l.344-2.41L7.822 13z", fill: "" })), "FilledFlash");

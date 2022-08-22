"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledConvoIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledConvoIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M16 2H4c-1.1 0-2 .9-2 2v13c0 .8 1 1.3 1.6.8l4.1-3.3H16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21 8a1 1 0 011 1v12a1 1 0 01-1.622.783L16.25 18.5H9a1 1 0 110-2h7.6a1 1 0 01.622.217L20 18.927V9a1 1 0 011-1z", fill: "" })), "FilledConvo");

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasscodeIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.PasscodeIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 9a1 1 0 011-1h18a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V9zm2 1v4h16v-4H4z", fill: "" }),
    react_1.default.createElement("path", { d: "M6 13a1 1 0 100-2 1 1 0 000 2zM10 13a1 1 0 100-2 1 1 0 000 2zM14 13a1 1 0 100-2 1 1 0 000 2zM18 13a1 1 0 100-2 1 1 0 000 2z", fill: "" })), "Passcode");

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledWalletIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledWalletIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M17 17c-1.7 0-3-1.3-3-3s1.3-3 3-3h5V8c0-1.1-.9-2-2-2H5c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1-.4 1-1s-.4-1-1-1H5C3.3 2 2 3.3 2 5v13c0 2.2 1.8 4 4 4h14c1.1 0 2-.9 2-2v-3h-5z", fill: "" }),
    react_1.default.createElement("path", { d: "M16 14c0 .6.4 1 1 1h5v-2h-5c-.6 0-1 .4-1 1z", fill: "" })), "FilledWallet");

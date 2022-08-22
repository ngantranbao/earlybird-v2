"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignOutIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.SignOutIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 4a1 1 0 01-1 1H5v14h2a1 1 0 110 2H3V3h4a1 1 0 011 1z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.896 17.518l-1.414-1.415L17.586 13H8a1 1 0 110-2h9.586l-3.104-3.104 1.414-1.414L21.414 12l-5.518 5.518z", fill: "" })), "SignOut");

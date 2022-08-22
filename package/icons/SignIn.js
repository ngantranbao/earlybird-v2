"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.SignInIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 20a1 1 0 011-1h2V5h-2a1 1 0 110-2h4v18h-4a1 1 0 01-1-1z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.896 17.518l-1.414-1.414L13.586 13H4a1 1 0 110-2h9.586l-3.104-3.104 1.414-1.414L17.414 12l-5.518 5.518z", fill: "" })), "SignIn");

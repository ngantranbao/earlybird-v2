"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ReceiptIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 4c-.568 0-.946.45-.904.91.003.03.004.06.004.09v14.125l.517-.456c1.114-1.089 2.798-1.02 3.94-.023l.002.001 1.459 1.265c.01.006.018.01.022.01.006.003.01.003.01.003l.01-.002a.116.116 0 00.022-.011l1.439-1.247c1.115-1.085 2.797-1.015 3.938-.018l.003.003.538.475V5c0-.548-.452-1-1-1H7zM4.1 5.04C3.973 3.326 5.383 2 7 2h10c1.652 0 3 1.348 3 3v15.7c0 .512-.285 1.022-.824 1.224a1.303 1.303 0 01-1.354-.288l-1.68-1.483-.002-.002c-.45-.392-.948-.33-1.233-.044a1 1 0 01-.052.049l-1.5 1.3-.055.044a2.05 2.05 0 01-2.555-.044l-1.5-1.3-.004-.003c-.45-.394-.948-.331-1.234-.046a.97.97 0 01-.045.043l-1.684 1.485a1.27 1.27 0 01-1.45.21c-.34-.17-.728-.567-.728-1.145V5.04zM8 8a1 1 0 011-1h3a1 1 0 110 2H9a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z", fill: "" })), "Receipt");

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShuffleIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ShuffleIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.293 3.293a1 1 0 011.414 0l6.222 6.222-1.414 1.414-6.222-6.222a1 1 0 010-1.414zM13.778 3H21v7.222h-2V6.414L4.707 20.707a1 1 0 01-1.414-1.414L17.586 5h-3.808V3zm.707 10.07L19 17.587v-3.808h2V21h-7.222v-2h3.808l-4.515-4.515 1.414-1.414z", fill: "" })), "Shuffle");

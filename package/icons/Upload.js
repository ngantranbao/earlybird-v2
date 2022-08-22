"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.UploadIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 16a1 1 0 011 1v2h14v-2a1 1 0 112 0v4H3v-4a1 1 0 011-1z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.518 8.104l-1.415 1.414L13 6.414V16a1 1 0 11-2 0V6.414L7.896 9.518 6.482 8.104 12 2.586l5.518 5.518z", fill: "" })), "Upload");

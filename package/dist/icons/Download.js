"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.DownloadIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 16a1 1 0 011 1v2h14v-2a1 1 0 112 0v4H3v-4a1 1 0 011-1z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.482 11.896l1.414-1.414L11 13.586V4a1 1 0 112 0v9.586l3.104-3.104 1.414 1.414L12 17.414l-5.518-5.518z", fill: "" })), "Download");

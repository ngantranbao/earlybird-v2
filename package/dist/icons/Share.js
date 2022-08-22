"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ShareIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 5a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 11.882 2.124l-8.898 3.56a3.037 3.037 0 010 .632l8.898 3.56a3 3 0 11-.865 1.808l-8.899-3.56a3 3 0 110-4.249l8.899-3.559A3.034 3.034 0 0116 6zM5 11a1 1 0 100 2 1 1 0 000-2zm14 6a1 1 0 100 2 1 1 0 000-2z", fill: "" })), "Share");

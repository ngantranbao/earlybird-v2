"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalLinkIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ExternalLinkIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14 3h7v7h-2V6.414l-6.293 6.293a1 1 0 01-1.414-1.414L17.586 5H14V3z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 6a3 3 0 013-3h5v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-5h2v5a3 3 0 01-3 3H6a3 3 0 01-3-3V6z", fill: "" })), "ExternalLink");

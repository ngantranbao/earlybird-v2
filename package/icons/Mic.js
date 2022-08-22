"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.MicIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.6 6c-.948 0-1.8.852-1.8 1.8v4.8c0 .971.775 1.8 1.8 1.8 1.06 0 1.864-.85 1.802-1.838a1 1 0 01-.002-.062V7.8c0-.971-.775-1.8-1.8-1.8zM7.8 7.8C7.8 5.748 9.548 4 11.6 4c2.175 0 3.8 1.771 3.8 3.8v4.671c.118 2.197-1.672 3.929-3.8 3.929-2.175 0-3.8-1.771-3.8-3.8V7.8zm-2.7 3.8a1 1 0 011 1c0 3.058 2.462 5.6 5.6 5.6 3.058 0 5.6-2.462 5.6-5.6a1 1 0 112 0c0 3.95-2.969 7.105-6.7 7.547V22h2a1 1 0 110 2h-6a1 1 0 110-2h2v-1.878c-3.723-.535-6.5-3.743-6.5-7.522a1 1 0 011-1z", fill: "" })), "Mic");

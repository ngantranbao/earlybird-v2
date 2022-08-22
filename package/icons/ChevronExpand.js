"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChevronExpandIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ChevronExpandIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5a1 1 0 011-1h7v7a1 1 0 11-2 0V6h-5a1 1 0 01-1-1zM12 19a1 1 0 01-1 1H4v-7a1 1 0 112 0v5h5a1 1 0 011 1z", fill: "" })), "ChevronExpand");

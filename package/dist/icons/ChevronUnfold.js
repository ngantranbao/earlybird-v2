"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChevronUnfoldIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ChevronUnfoldIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3.586l5.207 5.207a1 1 0 01-1.414 1.414L12 6.414l-3.793 3.793a1 1 0 01-1.414-1.414L12 3.586zM12 19.914l-5.207-5.207a1 1 0 111.414-1.414L12 17.086l3.793-3.793a1 1 0 011.414 1.414L12 19.914z", fill: "" })), "ChevronUnfold");

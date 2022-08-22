"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.StarIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3a1 1 0 01.895.553l2.266 4.533 4.983.724a1 1 0 01.554 1.706l-3.627 3.536.816 4.986a1 1 0 01-1.456 1.045L12 17.733l-4.431 2.35a1 1 0 01-1.456-1.044l.816-4.987-3.627-3.536a1 1 0 01.554-1.706l4.983-.724 2.267-4.533A1 1 0 0112 3zm0 3.236l-1.605 3.211a1 1 0 01-.751.543l-3.496.508 2.55 2.486a1 1 0 01.289.877l-.574 3.51 3.118-1.654a1 1 0 01.938 0l3.119 1.655-.575-3.51a1 1 0 01.289-.878l2.55-2.486-3.496-.508a1 1 0 01-.75-.543L12 6.237z", fill: "" })), "Star");

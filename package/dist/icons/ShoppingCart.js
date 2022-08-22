"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ShoppingCartIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 4a1 1 0 011-1h2a1 1 0 01.974.775l.976 4.226L7 8h14a1 1 0 01.936 1.351l-3 8A1 1 0 0118 18H8a1 1 0 01-.974-.775L4.204 5H3a1 1 0 01-1-1zm5.41 6l1.386 6h8.511l2.25-6H7.411z", fill: "" }),
    react_1.default.createElement("path", { d: "M7.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", fill: "" })), "ShoppingCart");

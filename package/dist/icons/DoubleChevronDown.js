"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleChevronDownIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.DoubleChevronDownIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 12.414L6.293 6.707a1 1 0 011.414-1.414L12 9.586l4.293-4.293a1 1 0 111.414 1.414L12 12.414z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 18.414l-5.707-5.707a1 1 0 111.414-1.414L12 15.586l4.293-4.293a1 1 0 011.414 1.414L12 18.414z", fill: "" })), "DoubleChevronDown");

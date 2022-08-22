"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledShareIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledShareIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M19 9a3 3 0 100-6 3 3 0 000 6zM19 21a3 3 0 100-6 3 3 0 000 6zM5 15a3 3 0 100-6 3 3 0 000 6z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.928 6.629a1 1 0 01-.557 1.3l-10 4a1 1 0 01-.742-1.857l10-4a1 1 0 011.3.557z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.072 12.629a1 1 0 011.3-.557l10 4a1 1 0 01-.743 1.857l-10-4a1 1 0 01-.557-1.3z", fill: "" })), "FilledShare");

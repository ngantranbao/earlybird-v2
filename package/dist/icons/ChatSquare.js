"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatSquareIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ChatSquareIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 6c0-1.652 1.348-3 3-3h12c1.652 0 3 1.348 3 3v8c0 1.652-1.348 3-3 3H9.35l-4.725 3.78A1 1 0 013 20V6zm3-1c-.548 0-1 .452-1 1v11.92l3.375-2.7A1 1 0 019 15h9c.548 0 1-.452 1-1V6c0-.548-.452-1-1-1H6z", fill: "" }),
    react_1.default.createElement("path", { d: "M8 11a1 1 0 100-2 1 1 0 000 2zM12 11a1 1 0 100-2 1 1 0 000 2zM16 11a1 1 0 100-2 1 1 0 000 2z", fill: "" })), "ChatSquare");

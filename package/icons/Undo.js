"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndoIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.UndoIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.104 4.043l1.414 1.414-3.104 3.104h7.836a5.75 5.75 0 110 11.5H10.5a1 1 0 010-2h3.75a3.75 3.75 0 100-7.5H6.414l3.104 3.103-1.414 1.414-5.518-5.517 5.518-5.518z", fill: "" })), "Undo");

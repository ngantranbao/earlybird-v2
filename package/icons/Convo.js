"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvoIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ConvoIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 5c0-1.652 1.348-3 3-3h10c1.652 0 3 1.348 3 3v6.5c0 1.652-1.348 3-3 3H7.75l-4.127 3.283A1 1 0 012 17V5zm3-1c-.548 0-1 .452-1 1v9.927l2.777-2.21A1 1 0 017.4 12.5H15c.548 0 1-.452 1-1V5c0-.548-.452-1-1-1H5zm16 4a1 1 0 011 1v12a1 1 0 01-1.622.783L16.25 18.5H9a1 1 0 110-2h7.6a1 1 0 01.622.217L20 18.927V9a1 1 0 011-1z", fill: "" })), "Convo");

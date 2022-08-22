"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.BinIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.272 3.629A1 1 0 018.2 3h7.6a1 1 0 01.928.629L17.678 6H20a1 1 0 110 2h-1v10c0 1.652-1.348 3-3 3H8c-1.652 0-3-1.348-3-3V8H4a1 1 0 010-2h2.323l.949-2.371zM7 8h10v10c0 .548-.452 1-1 1H8c-.548 0-1-.452-1-1V8zm8.523-2H8.477l.4-1h6.246l.4 1zM10 10a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4 0a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1z", fill: "" })), "Bin");

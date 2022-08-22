"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrinterIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.PrinterIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.568 3.568C6.956 3.18 7.473 3 8 3h8c.527 0 1.044.18 1.432.568.388.388.568.905.568 1.432v2h1c1.547 0 3 1.148 3 2.8v6.4c0 1.652-1.453 2.8-3 2.8h-1c0 .527-.18 1.044-.568 1.432-.388.388-.905.568-1.432.568H8c-.527 0-1.044-.18-1.432-.568C6.18 20.044 6 19.527 6 19H5c-1.547 0-3-1.148-3-2.8V9.8C2 8.148 3.453 7 5 7h1V5c0-.527.18-1.044.568-1.432zM8 7h8V5H8v2zM5 9c-.653 0-1 .452-1 .8v6.4c0 .348.347.8 1 .8h1v-2c0-.527.18-1.044.568-1.432C6.956 13.18 7.473 13 8 13h8c.527 0 1.044.18 1.432.568.388.388.568.905.568 1.432v2h1c.653 0 1-.452 1-.8V9.8c0-.348-.347-.8-1-.8H5zm11 6H8v4h8v-4z", fill: "" })), "Printer");

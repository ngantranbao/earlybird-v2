"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.TransferIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.793 19.707l1.414-1.414L5.414 16.5H15a1 1 0 100-2H5.414l1.793-1.793-1.414-1.414L1.586 15.5l4.207 4.207zM18.207 4.293l-1.414 1.414L18.586 7.5H9a1 1 0 100 2h9.586l-1.793 1.793 1.414 1.414L22.414 8.5l-4.207-4.207z", fill: "" })), "Transfer");

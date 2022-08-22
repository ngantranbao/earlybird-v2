"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.VideoIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 8c-.548 0-1 .452-1 1v6c0 .548.452 1 1 1h9c.548 0 1-.452 1-1V9c0-.548-.452-1-1-1H5zm12 1.373V9c0-1.652-1.348-3-3-3H5C3.348 6 2 7.348 2 9v6c0 1.652 1.348 3 3 3h9c1.652 0 3-1.348 3-3v-.373l3.46 2.215A1 1 0 0022 16V8a1 1 0 00-1.54-.842L17 9.373zm0 2.88l3 1.92V9.827l-3 1.92v.506z", fill: "" })), "Video");

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaretUnfoldIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.CaretUnfoldIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M12 4l4.293 4.293c.63.63.184 1.707-.707 1.707H8.414c-.89 0-1.337-1.077-.707-1.707L12 4zM12 19l-4.293-4.293c-.63-.63-.184-1.707.707-1.707h7.172c.89 0 1.337 1.077.707 1.707L12 19z", fill: "" })), "CaretUnfold");

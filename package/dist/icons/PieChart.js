"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PieChartIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.PieChartIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M19 11.9h-6.5c-.3 0-.5-.2-.5-.5V4.9c0-.6-.5-1-1-1-5.4 0-9.8 4.9-8.9 10.5.6 3.8 3.6 6.8 7.4 7.4 5.6.9 10.5-3.4 10.5-8.9 0-.5-.4-1-1-1zm-9.1 8C7 19.4 4.5 17 4.1 14c-.6-4 2.2-7.5 5.9-8v6.9c0 .6.4 1 1 1h6.9c-.5 3.8-4 6.5-8 6z", fill: "" }),
    react_1.default.createElement("path", { d: "M21.9 9.7c-.6-4-3.7-7.1-7.7-7.7-.6-.1-1.2.5-1.2 1.1v7.3c0 .3.2.5.5.5h7.3c.7 0 1.2-.6 1.1-1.2z", fill: "" })), "PieChart");

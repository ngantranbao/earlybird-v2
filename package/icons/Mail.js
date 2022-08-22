"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.MailIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 7c-.548 0-1 .452-1 1v.109l7 3.85 7-3.85V8c0-.548-.452-1-1-1H6zm13 3.391l-6.518 3.585a1 1 0 01-.964 0L5 10.391V16.4c0 .548.452 1 1 1h12c.548 0 1-.452 1-1v-6.009zM3 8c0-1.652 1.348-3 3-3h12c1.652 0 3 1.348 3 3v8.4c0 1.652-1.348 3-3 3H6c-1.652 0-3-1.348-3-3V8z", fill: "" })), "Mail");

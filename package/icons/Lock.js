"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.LockIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 8c0-3.352 2.648-6 6-6s6 2.648 6 6v2.172c1.163.413 2 1.526 2 2.828v6c0 1.652-1.348 3-3 3H7c-1.652 0-3-1.348-3-3v-6c0-1.302.837-2.415 2-2.828V8zm2 2h8V8c0-2.248-1.752-4-4-4S8 5.752 8 8v2zm-1 2c-.548 0-1 .452-1 1v6c0 .548.452 1 1 1h10c.548 0 1-.452 1-1v-6c0-.548-.452-1-1-1H7zm5 2a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z", fill: "" })), "Lock");

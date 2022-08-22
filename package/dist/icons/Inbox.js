"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboxIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.InboxIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 5c0-1.652 1.348-3 3-3h14c1.652 0 3 1.348 3 3v14c0 1.652-1.348 3-3 3H5c-1.652 0-3-1.348-3-3V5zm3-1c-.548 0-1 .452-1 1v9h5a1 1 0 011 1v1h4v-1a1 1 0 011-1h5V5c0-.548-.452-1-1-1H5zm15 12h-4v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1H4v3c0 .548.452 1 1 1h14c.548 0 1-.452 1-1v-3z", fill: "" })), "Inbox");

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.MobileIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 4c-.548 0-1 .452-1 1v14c0 .548.452 1 1 1h8c.548 0 1-.452 1-1V5c0-.548-.452-1-1-1H8zM5 5c0-1.652 1.348-3 3-3h8c1.652 0 3 1.348 3 3v14c0 1.652-1.348 3-3 3H8c-1.652 0-3-1.348-3-3V5z", fill: "" }),
    react_1.default.createElement("path", { d: "M12 19a1 1 0 100-2 1 1 0 000 2z", fill: "" })), "Mobile");

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsbStickIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.UsbStickIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 9a1 1 0 011-1h11a1 1 0 011 1v10c0 1.652-1.348 3-3 3H9c-1.652 0-3-1.348-3-3V9zm2 1v9c0 .548.452 1 1 1h7c.548 0 1-.452 1-1v-9H8z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.6 3a1 1 0 011-1h7.8a1 1 0 011 1v6a1 1 0 01-1 1H8.6a1 1 0 01-1-1V3zm2 1v4h5.8V4H9.6z", fill: "" }),
    react_1.default.createElement("path", { d: "M12 6c0 .3-.2.5-.5.5H11c-.3 0-.5-.2-.5-.5v-.5c0-.3.2-.5.5-.5h.5c.3 0 .5.2.5.5V6zM14.5 6c0 .3-.2.5-.5.5h-.5c-.3 0-.5-.2-.5-.5v-.5c0-.3.2-.5.5-.5h.5c.3 0 .5.2.5.5V6z", fill: "" })), "UsbStick");

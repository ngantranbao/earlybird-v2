"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdCardIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.IdCardIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 7c-.548 0-1 .452-1 1v8c0 .548.452 1 1 1h14c.548 0 1-.452 1-1V8c0-.548-.452-1-1-1H5zM2 8c0-1.652 1.348-3 3-3h14c1.652 0 3 1.348 3 3v8c0 1.652-1.348 3-3 3H5c-1.652 0-3-1.348-3-3V8z", fill: "" }),
    react_1.default.createElement("path", { d: "M9.205 11.252a1.3 1.3 0 10-1.838-1.838 1.3 1.3 0 001.838 1.838zM8.3 12.3c-1.2 0-2.2 1-2.3 2.2 0 .2.2.5.5.5h3.6c.3 0 .5-.3.5-.5 0-1.2-1.1-2.2-2.3-2.2z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 10a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zM13 14a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z", fill: "" })), "IdCard");

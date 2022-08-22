"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.CreditCardIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 7c-.548 0-1 .452-1 1v1h16V8c0-.548-.452-1-1-1H5zm17 1c0-1.652-1.348-3-3-3H5C3.348 5 2 6.348 2 8v8c0 1.652 1.348 3 3 3h14c1.652 0 3-1.348 3-3V8zm-2 3H4v5c0 .548.452 1 1 1h14c.548 0 1-.452 1-1v-5zM6 14a1 1 0 011-1h4a1 1 0 110 2H7a1 1 0 01-1-1zm8 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z", fill: "" })), "CreditCard");

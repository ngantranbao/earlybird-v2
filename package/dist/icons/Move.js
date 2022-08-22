"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.MoveIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.586l3.907 3.907-1.414 1.414L13 6.414V11h4.586l-1.493-1.493 1.414-1.414L21.414 12l-3.907 3.907-1.414-1.414L17.586 13H13v4.586l1.493-1.493 1.414 1.414L12 21.414l-3.907-3.907 1.414-1.414L11 17.586V13H6.414l1.493 1.493-1.414 1.414L2.586 12l3.907-3.907 1.414 1.414L6.414 11H11V6.414L9.507 7.907 8.093 6.493 12 2.586z", fill: "" })), "Move");

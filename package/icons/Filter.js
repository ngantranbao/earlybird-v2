"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilterIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 4a1 1 0 011-1h14.8a1 1 0 011 1v2.9c0 .774-.311 1.526-.893 2.107l-.007.008-4.5 4.405V18a1 1 0 01-.553.894l-4 2A1 1 0 019.4 20v-6.58L4.893 9.007A2.974 2.974 0 014 6.9V4zm2 1v1.9c0 .225.088.472.304.69l4.796 4.696a1 1 0 01.3.714v5.382l2-1V13a1 1 0 01.3-.714l4.796-4.696a.975.975 0 00.304-.69V5H6z", fill: "" })), "Filter");

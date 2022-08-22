"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.MapIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.567 4.176A1 1 0 0122 5v11.7a1 1 0 01-.642.934l-6 2.3a1 1 0 01-.716 0L9 17.77l-5.642 2.163A1 1 0 012 19V7.3a1 1 0 01.642-.934l6-2.3a1 1 0 01.716 0L15 6.23l5.642-2.163a1 1 0 01.925.11zM14 7.988l-4-1.534v9.558l4 1.534V7.988zm2 9.558l4-1.534V6.454l-4 1.534v9.558zm-8-1.534V6.454L4 7.988v9.558l4-1.534z", fill: "" })), "Map");

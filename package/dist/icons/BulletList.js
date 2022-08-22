"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulletListIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.BulletListIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 7a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM9 12a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM9 17a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1z", fill: "" }),
    react_1.default.createElement("path", { d: "M6 8a1 1 0 100-2 1 1 0 000 2zM6 13a1 1 0 100-2 1 1 0 000 2zM6 18a1 1 0 100-2 1 1 0 000 2z", fill: "" })), "BulletList");

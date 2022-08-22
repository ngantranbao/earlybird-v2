"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.GoogleIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M12.233 10.176v3.865h5.487c-.51 2.456-2.648 3.867-5.487 3.867-3.307-.045-5.964-2.679-5.964-5.913 0-3.234 2.657-5.868 5.964-5.913A5.999 5.999 0 0116 7.402l2.978-2.912c-3.416-2.937-8.404-3.314-12.24-.927C2.9 5.95 1.136 10.529 2.408 14.798c1.273 4.27 5.276 7.205 9.824 7.202C17.348 22 22 18.361 22 11.994a8.19 8.19 0 00-.229-1.82l-9.538.002z", fill: "" })), "Google");

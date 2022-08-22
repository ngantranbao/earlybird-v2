"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorPaletteIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ColorPaletteIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M12 8.3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.7 8.8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7.8 10.3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8.3 12.8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 12C2 6.448 6.548 1.9 12.1 1.9s10 4.448 10 10c0 2.441-2.016 4.743-4.893 4.995-.514.064-1.02.008-1.45-.063a17.29 17.29 0 01-.64-.123l-.053-.01c-.185-.039-.352-.073-.514-.102-.808-.143-.927-.024-.976.036a.994.994 0 01-.027.031c-.085.097-.102.16-.107.189a.347.347 0 00.021.168 1.206 1.206 0 00.403.532 2.668 2.668 0 01.786 2.669c-.14.496-.444.96-.925 1.292-.476.329-1.067.486-1.725.486-5.552 0-10-4.448-10-10zm10.1-8.1C7.652 3.9 4 7.552 4 12c0 4.448 3.552 8 8 8 .342 0 .514-.08.59-.133a.325.325 0 00.135-.189.674.674 0 00-.177-.62c-.354-.29-.776-.78-.984-1.404a2.292 2.292 0 01.475-2.303c.851-1.023 2.123-.854 2.86-.723.191.034.385.074.565.11l.055.012c.2.041.386.079.567.109.37.061.654.08.882.05l.049-.006c1.91-.159 3.083-1.65 3.083-3.003 0-4.448-3.552-8-8-8z", fill: "" })), "ColorPalette");

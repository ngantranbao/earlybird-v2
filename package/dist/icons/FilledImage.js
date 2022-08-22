"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledImageIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledImageIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("g", { clipPath: "url(#filled-image_svg__clip0)" },
        react_1.default.createElement("path", { d: "M19 3H5C3.3 3 2 4.3 2 6v12.1c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM9.5 6.1c.8 0 1.5.6 1.5 1.5s-.7 1.5-1.5 1.5S8 8.4 8 7.6s.7-1.5 1.5-1.5zM4.7 19c-.4-.1-.7-.5-.7-.9v-2.5L5.6 14c.8-.8 2.1-.8 2.8 0l.6.6L4.7 19zm15.3-.9c0 .6-.4 1-1 1H7.4l3.7-3.7 4.4-4.4c.8-.8 2.1-.8 2.8 0l1.7 1.5v5.6z", fill: "" })),
    react_1.default.createElement("defs", null,
        react_1.default.createElement("clipPath", { id: "filled-image_svg__clip0" },
            react_1.default.createElement("path", { fill: "#fff", transform: "translate(2 3)", d: "M0 0h20v18.1H0z" })))), "FilledImage");

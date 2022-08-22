"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledHeartIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledHeartIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("g", { clipPath: "url(#filled-heart_svg__clip0)" },
        react_1.default.createElement("path", { d: "M19.3 5c-1.9-1.6-4.8-1.3-6.5.5l-.8.7-.7-.7c-1.8-1.8-4.6-2-6.6-.5-2.2 1.8-2.3 5.1-.3 7.1l.9.9 6 6c.4.4 1 .4 1.4 0l6-6 .9-.9c2-2 1.9-5.2-.3-7.1z", fill: "" })),
    react_1.default.createElement("defs", null,
        react_1.default.createElement("clipPath", { id: "filled-heart_svg__clip0" },
            react_1.default.createElement("path", { fill: "#fff", transform: "translate(3 4)", d: "M0 0h18v15.3H0z" })))), "FilledHeart");

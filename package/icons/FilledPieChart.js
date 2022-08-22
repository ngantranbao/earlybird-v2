"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledPieChartIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledPieChartIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("g", { clipPath: "url(#filled-pie-chart_svg__clip0)", fill: "" },
        react_1.default.createElement("path", { d: "M19.9 14.1c-.6 4.5-4.5 8-9.2 7.9-4.7-.1-8.6-4-8.7-8.7C1.9 8.5 5.4 4.6 9.9 4c.6 0 1.1.4 1.1 1v7c0 .6.4 1 1 1h6.9c.6 0 1.1.5 1 1.1z" }),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14 3.996V10h5.982a.199.199 0 00.015-.052c-.47-3.09-2.974-5.502-5.997-5.952zm.252-1.985C12.947 1.803 12 2.891 12 4v7a1 1 0 001 1h7c1.274 0 2-1.077 2-2.1 0-.046-.003-.092-.01-.138-.562-4.05-3.813-7.185-7.738-7.75z" })),
    react_1.default.createElement("defs", null,
        react_1.default.createElement("clipPath", { id: "filled-pie-chart_svg__clip0" },
            react_1.default.createElement("path", { fill: "#fff", transform: "translate(2 2)", d: "M0 0h20v20H0z" })))), "FilledPieChart");

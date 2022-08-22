"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeartIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.HeartIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("g", { clipPath: "url(#heart_svg__clip0)" },
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.493 5.493c2.09-2.09 5.324-2.09 7.414 0l.093.093.093-.093c2.09-2.09 5.324-2.09 7.414 0l.021.022c1.951 2.073 1.981 5.39-.02 7.392l-6.8 6.8a1 1 0 01-1.415 0l-6.8-6.8c-2.09-2.09-2.09-5.324 0-7.414zm6 1.414c-1.31-1.31-3.276-1.31-4.586 0-1.31 1.31-1.31 3.276 0 4.586L12 17.586l6.093-6.093c1.195-1.195 1.228-3.27-.01-4.597-1.31-1.298-3.27-1.295-4.576.011l-.8.8a1 1 0 01-1.414 0l-.8-.8z", fill: "" })),
    react_1.default.createElement("defs", null,
        react_1.default.createElement("clipPath", { id: "heart_svg__clip0" },
            react_1.default.createElement("path", { fill: "#fff", transform: "translate(3 4)", d: "M0 0h18v16H0z" })))), "Heart");

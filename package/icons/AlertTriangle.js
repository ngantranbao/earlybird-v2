"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertTriangleIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.AlertTriangleIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.948 4.476c1.19-1.935 4.013-1.935 5.204 0l.015.025L20.66 15.79c1.212 1.991-.316 4.51-2.56 4.51H5c-2.245 0-3.772-2.519-2.56-4.51L8.933 4.5a.977.977 0 01.015-.025zm1.71 1.038L4.167 16.799a.925.925 0 01-.015.025C3.779 17.43 4.25 18.3 5 18.3h13.1c.75 0 1.221-.87.848-1.476a1.071 1.071 0 01-.015-.025L12.442 5.514a1.058 1.058 0 00-1.784 0z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.5 8.7v5h-2v-5h2z", fill: "" }),
    react_1.default.createElement("path", { d: "M11.5 16.7a1 1 0 100-2 1 1 0 000 2z", fill: "" })), "AlertTriangle");

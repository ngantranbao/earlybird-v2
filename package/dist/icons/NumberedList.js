"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberedListIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.NumberedListIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("g", { clipPath: "url(#numbered-list_svg__clip0)", fillRule: "evenodd", clipRule: "evenodd", fill: "" },
        react_1.default.createElement("path", { d: "M8.5 6.8a1 1 0 011-1h9a1 1 0 110 2h-9a1 1 0 01-1-1zM8.5 16.8a1 1 0 011-1h9a1 1 0 110 2h-9a1 1 0 01-1-1zM8.5 11.8a1 1 0 011-1h9a1 1 0 110 2h-9a1 1 0 01-1-1zM4.5 5.5A.5.5 0 015 5h1a.5.5 0 01.5.5V8a.5.5 0 11-1 0V6H5a.5.5 0 01-.5-.5zM4 10.5a.5.5 0 01.5-.5h2a.5.5 0 01.39.812L5.54 12.5h.96a.5.5 0 010 1h-2a.5.5 0 01-.39-.812L5.46 11H4.5a.5.5 0 01-.5-.5zM4 15.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v1.3a.5.5 0 01-1 0V16H4.5a.5.5 0 01-.5-.5z" }),
        react_1.default.createElement("path", { d: "M5 16.8a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V18a.5.5 0 01-.5.5h-2a.5.5 0 010-1H6v-.2h-.5a.5.5 0 01-.5-.5z" })),
    react_1.default.createElement("defs", null,
        react_1.default.createElement("clipPath", { id: "numbered-list_svg__clip0" },
            react_1.default.createElement("path", { fill: "#fff", transform: "translate(4 5)", d: "M0 0h15.5v13.5H0z" })))), "NumberedList");

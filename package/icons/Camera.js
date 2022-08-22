"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.CameraIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.106 4.553A1 1 0 019 4h6a1 1 0 01.894.553L16.618 6H19.2C20.752 6 22 7.248 22 8.8v8.4c0 1.552-1.248 2.8-2.8 2.8H4.8A2.792 2.792 0 012 17.2V8.8C2 7.248 3.248 6 4.8 6h2.582l.724-1.447zM9.618 6l-.724 1.447A1 1 0 018 8H4.8c-.448 0-.8.352-.8.8v8.4c0 .448.352.8.8.8h14.4c.448 0 .8-.352.8-.8V8.8c0-.448-.352-.8-.8-.8H16a1 1 0 01-.894-.553L14.382 6H9.618zM12 11a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-3.5 1.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z", fill: "" })), "Camera");

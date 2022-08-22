"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledCameraIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FilledCameraIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { d: "M12 15a2 2 0 100-4 2 2 0 000 4z", fill: "" }),
    react_1.default.createElement("path", { d: "M19.2 6h-2.6l-.7-1.4c-.2-.4-.5-.6-.9-.6H9c-.4 0-.7.2-.9.6L7.4 6H4.8C3.3 6 2 7.3 2 8.8v8.4C2 18.7 3.3 20 4.8 20h14.4c1.5 0 2.8-1.3 2.8-2.8V8.8C22 7.3 20.7 6 19.2 6zM12 17c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z", fill: "" })), "FilledCamera");

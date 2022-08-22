"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStepElement = exports.Step = void 0;
const react_1 = __importDefault(require("react"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.Step = (props) => {
    return react_1.default.createElement(react_1.default.Fragment, null, props.children);
};
exports.isStepElement = (object) => {
    return react_1.default.isValidElement(object) && object.type === exports.Step;
};

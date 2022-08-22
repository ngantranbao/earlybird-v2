"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTabElement = exports.Tab = void 0;
const react_1 = __importDefault(require("react"));
exports.Tab = props => react_1.default.createElement("div", null, props.children);
exports.isTabElement = (object) => {
    return react_1.default.isValidElement(object) && object.type === exports.Tab;
};

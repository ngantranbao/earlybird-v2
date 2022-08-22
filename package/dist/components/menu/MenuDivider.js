"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuDivider = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
exports.MenuDivider = props => {
    const { className } = props;
    return react_1.default.createElement("div", { className: classnames_1.default('ds-menu-divider', className) });
};

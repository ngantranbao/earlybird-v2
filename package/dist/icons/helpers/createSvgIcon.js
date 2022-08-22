"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSvgIcon = void 0;
const react_1 = __importDefault(require("react"));
const SvgIcon_1 = require("../svg-icon/SvgIcon");
exports.createSvgIcon = (path, displayName) => {
    let Icon = props => react_1.default.createElement(SvgIcon_1.SvgIcon, Object.assign({}, props), path);
    // display name for easy debuging and testing
    Icon.displayName = `Axie${displayName}Icon`;
    // memo for more effective render
    Icon = react_1.default.memo(Icon);
    return Icon;
};

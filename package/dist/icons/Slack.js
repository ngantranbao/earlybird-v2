"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.SlackIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.526 9.368a2.105 2.105 0 004.21 0V4.105a2.105 2.105 0 10-4.21 0v5.263zm-8.42-2.105a2.105 2.105 0 000 4.21h5.262a2.105 2.105 0 000-4.21H4.105zm10.526 5.263a2.105 2.105 0 000 4.21h5.263a2.105 2.105 0 100-4.21h-5.263zM9.368 22a2.105 2.105 0 01-2.105-2.105v-5.263a2.105 2.105 0 114.21 0v5.263A2.105 2.105 0 019.369 22zM7.263 4.105a2.105 2.105 0 014.21 0v2.106H9.369a2.105 2.105 0 01-2.105-2.106zM2 14.632a2.105 2.105 0 004.21 0v-2.106H4.106A2.105 2.105 0 002 14.632zm14.737 5.263a2.105 2.105 0 11-4.21 0V17.79h2.105c1.162 0 2.105.942 2.105 2.105zM22 9.368a2.105 2.105 0 00-4.21 0v2.106h2.105A2.105 2.105 0 0022 9.368z", fill: "" })), "Slack");

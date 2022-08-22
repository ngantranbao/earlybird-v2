"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FingerprintIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.FingerprintIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 4c-3.348 0-6 2.652-6 6v4c0 3.348 2.652 6 6 6s6-2.652 6-6v-4c0-3.348-2.652-6-6-6zm-8 6c0-4.452 3.548-8 8-8s8 3.548 8 8v4c0 4.452-3.548 8-8 8s-8-3.548-8-8v-4zm8-2c-1.148 0-2 .852-2 2v4a1 1 0 11-2 0v-4c0-2.252 1.748-4 4-4s4 1.748 4 4v4c0 1.727-1.072 3.212-2.684 3.749a1 1 0 01-.632-1.898C13.473 15.588 14 14.873 14 14v-4c0-1.148-.852-2-2-2zm0 2a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z", fill: "" })), "Fingerprint");

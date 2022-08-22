"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.WalletIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 4c-.548 0-1 .452-1 1s.452 1 1 1h15c.527 0 1.044.18 1.432.568.388.388.568.905.568 1.432v12c0 .527-.18 1.044-.568 1.432-.388.388-.905.568-1.432.568H6c-2.252 0-4-1.748-4-4V5c0-1.652 1.348-3 3-3h12a1 1 0 110 2H5zM4 7.828V18c0 1.148.852 2 2 2h14v-3h-3c-1.652 0-3-1.348-3-3s1.348-3 3-3h3V8H5c-.35 0-.687-.06-1-.172zM20 13h-3c-.548 0-1 .452-1 1s.452 1 1 1h3v-2z", fill: "" })), "Wallet");

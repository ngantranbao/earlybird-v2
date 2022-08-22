"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicesIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.DevicesIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.568 3.568C4.956 3.18 5.473 3 6 3h14c.527 0 1.044.18 1.432.568.388.388.568.905.568 1.432v11c0 .527-.18 1.044-.568 1.432-.388.388-.905.568-1.432.568h-9v1c0 .527-.18 1.044-.568 1.432C10.044 20.82 9.527 21 9 21H4c-.527 0-1.044-.18-1.432-.568C2.18 20.044 2 19.527 2 19v-9c0-.527.18-1.044.568-1.432C2.956 8.18 3.473 8 4 8V5c0-.527.18-1.044.568-1.432zM4 10v9h5v-9H4zm7 6v-6c0-.527-.18-1.044-.568-1.432C10.044 8.18 9.527 8 9 8H6V5h14v11h-9z", fill: "" })), "Devices");

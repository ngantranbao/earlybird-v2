"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.HomeIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.015l-5.981 6.18-.005.005a.151.151 0 00-.014.03v7.27h4v-3.9a1 1 0 011-1h2a1 1 0 011 1v3.9h4v-7.27l-.003-.009a.133.133 0 00-.01-.02l-.006-.006L12 5.015zM10.564 20.5c.131.064.28.1.436.1h2a.995.995 0 00.436-.1H18c.527 0 1.044-.18 1.432-.568.388-.388.568-.905.568-1.432v-7.3c0-.445-.19-1-.586-1.4l-5.995-6.195-.012-.012a1.966 1.966 0 00-2.814 0l-.012.012L4.586 9.8c-.395.4-.586.955-.586 1.4v7.3c0 .527.18 1.044.568 1.432.388.388.905.568 1.432.568h4.564z", fill: "" })), "Home");

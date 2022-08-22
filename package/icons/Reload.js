"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReloadIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.ReloadIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.144 3.796C7.642 3.796 4 7.428 4 11.898 4 16.368 7.642 20 12.144 20a8.14 8.14 0 007.888-6.077 1 1 0 111.936.501A10.14 10.14 0 0112.144 22C6.546 22 2 17.482 2 11.898 2 6.315 6.546 1.796 12.144 1.796c3.003 0 5.703 1.301 7.56 3.366a1 1 0 11-1.488 1.337 8.14 8.14 0 00-6.072-2.703z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 7.864v-2h3.864V2h2v5.864H15z", fill: "" })), "Reload");

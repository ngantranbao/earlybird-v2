"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncIcon = void 0;
const react_1 = __importDefault(require("react"));
const createSvgIcon_1 = require("./helpers/createSvgIcon");
exports.SyncIcon = createSvgIcon_1.createSvgIcon(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.493 6.101c-2.504-2.4-6.355-2.959-9.488-1.128C5.443 6.471 4.003 9.192 4 12.001a1 1 0 01-2-.002c.003-3.482 1.79-6.878 4.996-8.752 3.928-2.296 8.752-1.588 11.88 1.41a1 1 0 11-1.383 1.444zM21 11A1 1 0 0122 12c-.003 3.483-1.79 6.879-4.996 8.753-3.928 2.296-8.752 1.588-11.88-1.41a1 1 0 011.383-1.444c2.504 2.4 6.355 2.959 9.488 1.128 2.562-1.498 4.002-4.219 4.005-7.028A1 1 0 0121 11z", fill: "" }),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 7.864v-2h3.864V2h2v5.864H15zM9.296 16.432v2H5.432v3.864h-2v-5.864h5.864z", fill: "" })), "Sync");

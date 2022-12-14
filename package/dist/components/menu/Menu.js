"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const MenuItem_1 = require("./MenuItem");
exports.Menu = props => {
    const { children, className, noShadow, onSelect, selectedItem } = props;
    const handleSelectItem = (e, itemId) => {
        !!onSelect && onSelect(e, itemId);
    };
    const menuItemElements = react_1.default.Children.map(children, child => {
        if (MenuItem_1.isMenuItemElement(child)) {
            return react_1.cloneElement(child, {
                onSelect: handleSelectItem,
                isSelected: selectedItem === child.props.id,
            });
        }
        return child;
    });
    return (react_1.default.createElement("div", { className: classnames_1.default('ds-menu', { 'no-shadow': noShadow }, className) }, menuItemElements));
};

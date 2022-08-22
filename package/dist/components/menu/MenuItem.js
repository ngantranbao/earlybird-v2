"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMenuItemElement = exports.MenuItem = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
exports.MenuItem = props => {
    const { id, icon: Icon, label, className, disabled, rightElement, onClick, onSelect, isSelected, } = props;
    const handleClickMenuItem = (e) => {
        !!onClick && onClick(e);
        !disabled && !!onSelect && onSelect(e, id);
    };
    return (react_1.default.createElement("div", { className: classnames_1.default('ds-menu-item', { disabled, selected: isSelected }, className), onClick: handleClickMenuItem },
        !!Icon && react_1.default.createElement(Icon, { className: "ds-menu-item-icon" }),
        !!label && react_1.default.createElement("span", { className: "ds-menu-item-title" }, label),
        !!rightElement && react_1.default.createElement("span", { className: "ds-menu-item-right-element" }, rightElement)));
};
exports.isMenuItemElement = (object) => {
    return react_1.default.isValidElement(object) && object.type === exports.MenuItem;
};
